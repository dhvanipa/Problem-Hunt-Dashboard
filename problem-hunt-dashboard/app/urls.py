from django.urls import path, include, re_path

from rest_framework import routers
from .api import ProblemViewSet

from django.contrib.auth import views as auth_views

from . import views

router = routers.DefaultRouter()
router.register('api/problems', ProblemViewSet, 'problems')

urlpatterns = [
    path('', views.Home.as_view(), name='home'),
    re_path(r'^accounts\/logout/$', auth_views.LogoutView.as_view(next_page='home')),
    path('accounts/', include('allauth.urls')),
    path('accounts/users/current', views.current_user, name='current_user'),
] + router.urls