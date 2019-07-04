from rest_framework import serializers
from app.models import Problem


# Problem Serializer
class ProblemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Problem
        fields = '__all__'

    def create(self, validated_data):
        """
        Create and return a new `Idea` instance, given the validated data.
        """
        return Problem.objects.create(**validated_data)