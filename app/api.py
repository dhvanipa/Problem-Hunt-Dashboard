from app.models import Problem
from rest_framework import viewsets, permissions
from .serializers import ProblemSerializer


# Problem Viewset
class ProblemViewSet(viewsets.ModelViewSet):
    queryset = Problem.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProblemSerializer
