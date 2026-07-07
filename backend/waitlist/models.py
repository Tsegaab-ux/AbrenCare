from django.db import models


class WaitingList(models.Model):
    STATUS_CHOICES = [
        ('waiting', 'Waiting'),
        ('contacted', 'Contacted'),
        ('cancelled', 'Cancelled'),
    ]

    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    preferred_date = models.DateField(null=True, blank=True)
    notes = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='waiting')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.full_name} <{self.email}>"
