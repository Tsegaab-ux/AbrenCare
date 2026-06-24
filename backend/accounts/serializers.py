from rest_framework import serializers
from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser

        # fields that exist in your NEW model
        fields = [
            "id",
            "full_name",
            "email",
            "phone",
            "password",
            "is_active",
            "is_staff",
            "date_joined"
        ]

        # password should not be returned in API responses
        extra_kwargs = {
            "password": {"write_only": True}
        }

    # create user
    def create(self, validated_data):
        user = CustomUser(
            email=validated_data["email"],
            full_name=validated_data.get("full_name", ""),
            phone=validated_data.get("phone", "")
        )
        user.set_password(validated_data["password"])
        user.save()
        return user

    # update user
    def update(self, instance, validated_data):
        instance.full_name = validated_data.get(
            "full_name",
            instance.full_name
        )

        instance.email = validated_data.get(
            "email",
            instance.email
        )

        instance.phone = validated_data.get(
            "phone",
            instance.phone
        )

        password = validated_data.get("password", None)

        if password:
            instance.set_password(password)

        instance.save()
        return instance