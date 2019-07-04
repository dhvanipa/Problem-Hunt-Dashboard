from django.db import models
from django.contrib.auth.models import User


class Spock(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    num_endorsed = models.IntegerField(default=0)
    num_voiced = models.IntegerField(default=0)

    def __str__(self):
        return self.user.get_full_name()


class Problem(models.Model):

    creator = models.ForeignKey(Spock, on_delete=models.CASCADE, null=True)

    name = models.CharField(max_length=100)
    short_desc = models.CharField(max_length=500)

    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Comment(models.Model):
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE)
    creator = models.ForeignKey(Spock, on_delete=models.CASCADE)
    comment = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.creator.user.get_full_name()


class Like(models.Model):
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE)
    creator = models.ForeignKey(Spock, on_delete=models.CASCADE)

    def __str__(self):
        return self.creator.user.get_full_name()

# Name
# short_desc
# Creator
# Comments = []
# feedback = [
# “I have problem too ”: [num_votes, [array of people]]
# “Same but notify me plz”: [num_votes, [array of people]]
# ]
