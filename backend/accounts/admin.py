from django.contrib import admin
from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):

    # columns shown in Django admin
    list_display = (
        "full_name",
        "email",
        "phone",
        "is_active",
        "is_staff",
        "date_joined"
    )

    # searchable fields
    search_fields = (
        "full_name",
        "email",
        "phone"
    )

    # filters on right side
    list_filter = (
        "is_active",
        "is_staff",
        "date_joined"
    )