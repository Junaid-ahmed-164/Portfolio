from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import ContactMessage, ServiceRequest

admin.site.register(ContactMessage)
admin.site.register(ServiceRequest)
