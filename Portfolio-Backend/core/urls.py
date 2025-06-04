# core/urls.py

from django.urls import path
from .views import ContactMessageCreate, ServiceRequestCreate

urlpatterns = [
    path('contact/', ContactMessageCreate.as_view(), name='contact'),  # ✅ Correct
    path('service/', ServiceRequestCreate.as_view(), name='service'),  # ✅ Correct
]
