# from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponse
from allauth.socialaccount.models import SocialAccount

class Home(TemplateView):
    template_name = 'home.html'


@api_view(['GET'])
def current_user(request):
    user = request.user
    if user.is_authenticated:
        if hasattr(user, '_wrapped') and hasattr(user, '_setup'):
            if user._wrapped.__class__ == object:
                user._setup()
        user = user._wrapped
        social_account = SocialAccount.objects.filter(user=user)
        if social_account.count() > 0:
            social_account = social_account[0]
        user_data = {
            'username': user.username,
            'email': user.email,
            'full_name': user.get_full_name(),
            'provider': 'localhost'
        }
        if social_account:
            user_data["provider"] = social_account.provider
            user_data["picture"] = social_account.get_avatar_url()
        return JsonResponse(user_data)
    else:
        return HttpResponse(status=401)