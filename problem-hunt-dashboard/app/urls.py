from django.urls import path, include, re_path

from rest_framework import routers
from .api import ProblemViewSet

from django.contrib.auth import views as auth_views

from . import views

# router = routers.DefaultRouter()
# router.register('api/problems', ProblemViewSet, 'problems')

urlpatterns = [
    path('', views.Home.as_view(), name='home'),
    re_path(r'^accounts\/logout/$', auth_views.LogoutView.as_view(next_page='home')),
    path('accounts/', include('allauth.urls')),
    path('accounts/users/current', views.current_user, name='current_user'),
    path('api/ideas/', views.ideas_list, name='ideas'),
    re_path(r'api/idea/(?P<idea_id>\d+)/like/$', views.like_idea, name='like_idea'),
    re_path(r'api/idea/(?P<idea_id>\d+)/comments/$', views.comment_idea, name='comment_idea'),
]