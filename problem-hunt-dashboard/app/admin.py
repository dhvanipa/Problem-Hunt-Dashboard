from django.contrib import admin
from .models import Spock, Problem
# Register your models here.


class SpockAdmin(admin.ModelAdmin):
    pass


class IdeaAdmin(admin.ModelAdmin):
    pass


admin.site.register(Spock, SpockAdmin)
admin.site.register(Problem, IdeaAdmin)
