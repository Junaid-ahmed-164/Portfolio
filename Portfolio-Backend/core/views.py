from django.core.mail import send_mail
from django.conf import settings
from rest_framework import generics
from .models import ContactMessage, ServiceRequest
from .serializers import ContactMessageSerializer, ServiceRequestSerializer

class ContactMessageCreate(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        send_mail(
            subject="New Contact Message",
            message=f"Name: {instance.name}\nEmail: {instance.email}\nMessage: {instance.message}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],
            fail_silently=False,
        )


class ServiceRequestCreate(generics.CreateAPIView):
    queryset = ServiceRequest.objects.all()
    serializer_class = ServiceRequestSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        send_mail(
            subject=f"New Service Request: {instance.service}",
            message=f"Name: {instance.name}\nEmail: {instance.email}\nMessage: {instance.message}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],
            fail_silently=False,
        )
