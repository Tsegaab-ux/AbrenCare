from django.urls import path

from .views import WaitingListCreateView, WaitingListListView

urlpatterns = [
    path('waiting-list/', WaitingListCreateView.as_view(), name='waiting-list-create'),
    path('waiting-list/list/', WaitingListListView.as_view(), name='waiting-list-list'),
]
