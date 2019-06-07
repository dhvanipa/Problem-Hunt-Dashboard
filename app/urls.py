from django.urls import path, include

from rest_framework import routers
from .api import ProblemViewSet

from . import views

router = routers.DefaultRouter()
router.register('api/problems', ProblemViewSet, 'problems')

urlpatterns = [
    path('', views.Home.as_view(), name='home'),
    path('accounts/', include('allauth.urls')),
] + router.urls
