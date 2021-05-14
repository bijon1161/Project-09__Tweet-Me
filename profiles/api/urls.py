from django.urls import path
# from django.views.generic import TemplateView

from .views import (
    user_follow_view
)
'''
CLIENT
Base Endpoint /api/profiles
'''
urlpatterns = [
    path('<str:username>/follow', user_follow_view),
]
