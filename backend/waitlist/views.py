from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import WaitingList
from .serializers import WaitingListSerializer


class WaitingListCreateView(generics.CreateAPIView):
    queryset = WaitingList.objects.all()
    serializer_class = WaitingListSerializer
    permission_classes = [AllowAny]


class WaitingListListView(generics.ListAPIView):
    queryset = WaitingList.objects.all().order_by('-created_at')
    serializer_class = WaitingListSerializer
    permission_classes = [AllowAny]
