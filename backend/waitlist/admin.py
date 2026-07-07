from django.contrib import admin

from .models import WaitingList


@admin.register(WaitingList)
class WaitingListAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'status', 'preferred_date', 'created_at')
    list_filter = ('status', 'preferred_date', 'created_at')
    search_fields = ('full_name', 'email', 'phone')
    readonly_fields = ('created_at', 'updated_at')
