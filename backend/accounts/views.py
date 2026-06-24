import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.tokens import RefreshToken

from .models import CustomUser


@csrf_exempt
def signup_view(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST method required."}, status=405)

    try:
        data = json.loads(request.body.decode("utf-8"))
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON."}, status=400)

    email = data.get("email")
    full_name = data.get("full_name", "")
    phone = data.get("phone", "")
    password = data.get("password")

    if not email or not password:
        return JsonResponse({"error": "Email and password are required."}, status=400)

    if CustomUser.objects.filter(email=email).exists():
        return JsonResponse({"error": "A user with this email already exists."}, status=400)

    user = CustomUser(email=email, full_name=full_name, phone=phone)
    user.set_password(password)
    user.save()

    return JsonResponse({
        "id": user.id,
        "email": user.email,
        "full_name": user.full_name,
        "phone": user.phone,
    }, status=201)


@csrf_exempt
def login_view(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST method required."}, status=405)

    try:
        data = json.loads(request.body.decode("utf-8"))
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON."}, status=400)

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return JsonResponse({"error": "Email and password are required."}, status=400)

    try:
        user = CustomUser.objects.get(email=email)
    except CustomUser.DoesNotExist:
        return JsonResponse({"error": "User not found."}, status=404)

    if not user.check_password(password):
        return JsonResponse({"error": "Invalid password."}, status=400)

    refresh = RefreshToken.for_user(user)
    return JsonResponse({
        "message": "Login successful",
        "user": {
            "id": user.id,
            "email": user.email,
            "full_name": user.full_name,
        },
        "access": str(refresh.access_token),
        "refresh": str(refresh),
    }, status=200)
