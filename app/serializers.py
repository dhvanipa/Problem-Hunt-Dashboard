from rest_framework import serializers
from app.models import Problem


# Problem Serializer
class ProblemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Problem
        fields = '__all__'
