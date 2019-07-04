# from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponse
from allauth.socialaccount.models import SocialAccount
from .models import Problem, Spock, Like, Comment
from django.db.models import Count
import json


class Home(TemplateView):
    template_name = 'home.html'


def get_user_from_request(request):
    user = request.user
    if user.is_authenticated:
        if hasattr(user, '_wrapped') and hasattr(user, '_setup'):
            if user._wrapped.__class__ == object:
                user._setup()
        user = user._wrapped
        return user
    return None


def get_spock_user_from_user(user):
    return Spock.objects.get(user=user)


def get_social_user_from_user(user):
    return SocialAccount.objects.get(user=user)


@api_view(['GET'])
def current_user(request):
    user = get_user_from_request(request)
    if user:
        social_account = get_social_user_from_user(user)
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


@api_view(['GET', 'POST'])
def comment_idea(request, idea_id):
    """
    List all comments for an idea, or add a comment to an idea
    """
    problem = Problem.objects.get(pk=int(idea_id))
    if request.method == 'GET':
        comments = Comment.objects.filter(problem=problem)
        all_comments = []
        for comment in comments:
            social_account = get_social_user_from_user(comment.creator.user)
            comment_data = {
                "id": comment.id,
                "creator_name": comment.creator.user.get_full_name(),
                "creator_pic": social_account.get_avatar_url(),
                "text": comment.comment,
                "created_at": comment.created_at,
            }
            all_comments.append(comment_data)
        return JsonResponse({"list": all_comments})
    elif request.method == 'POST':
        user = get_user_from_request(request)
        if user:
            try:
                spock_account = get_spock_user_from_user(user)
                text = request.data
                new_comment = Comment(creator=spock_account, problem=problem, comment=text)
                new_comment.save()
                return HttpResponse(status=200)
            except Exception as e:
                print(e)
                return HttpResponse(status=500)
        else:
            return HttpResponse(status=401)

@api_view(['POST'])
def like_idea(request, idea_id):
    """
    Like an idea
    """
    if request.method == 'POST':
        user = get_user_from_request(request)
        if user:
            try:
                spock_account = get_spock_user_from_user(user)
                problem = Problem.objects.get(pk=int(idea_id))
                if Like.objects.filter(creator=spock_account, problem=problem).exists():
                    Like.objects.filter(creator=spock_account, problem=problem).delete()
                    return JsonResponse({"successunLiked": "Unliked"})
                else:
                    new_like = Like(creator=spock_account, problem=problem)
                    new_like.save()
                    return JsonResponse({"successLiked": "Added like!"})
                return HttpResponse(status=200)
            except Exception as e:
                print(e)
                return HttpResponse(status=500)
        else:
            return HttpResponse(status=401)


@api_view(['GET', 'POST'])
def ideas_list(request):
    """
    List all ideas, or create a new idea.
    """
    if request.method == 'GET':
        ideas = Problem.objects.annotate(number_of_likes=Count('like')).annotate(number_of_comments=Count('comment'))
        all_ideas = []
        for idea in ideas:
            social_account = get_social_user_from_user(idea.creator.user)
            idea_data = {
                "key": idea.id,
                "id": idea.id,
                "creator_name": idea.creator.user.get_full_name(),
                "creator_pic": social_account.get_avatar_url(),
                "name": idea.name,
                "short_desc": idea.short_desc,
                "num_likes": idea.number_of_likes,
                "num_comments": idea.number_of_comments,
                "created_at": idea.created_at,
            }
            all_ideas.append(idea_data)
        return JsonResponse({"list": all_ideas})

    elif request.method == 'POST':
        user = get_user_from_request(request)
        if user:
            try:
                spock_account = get_spock_user_from_user(user)
                social_account = get_social_user_from_user(user)
                idea = Problem(
                    creator=spock_account,
                    name=request.data['name'],
                    short_desc=request.data['short_desc']
                    )
                idea.save()
                return HttpResponse(status=200)
            except Exception as e:
                print(e)
                return HttpResponse(status=500)
        else:
            return HttpResponse(status=401)