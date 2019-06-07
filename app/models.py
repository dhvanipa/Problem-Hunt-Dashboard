from django.db import models


class Problem(models.Model):
    name = models.CharField(max_length=100)
    short_desc = models.CharField(max_length=500)

    created_at = models.DateTimeField(auto_now_add=True)



# Name
# short_desc
# Creator
# Comments = []
# Created_data
# Last_modified
# feedback = [
# “I have problem too ”: [num_votes, [array of people]]
# “Same but notify me plz”: [num_votes, [array of people]]
# ]
