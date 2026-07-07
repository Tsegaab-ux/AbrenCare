from rest_framework import serializers

from .models import WaitingList


class WaitingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaitingList
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')
