from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from .models import Spock

class UserAccountAdapter(DefaultSocialAccountAdapter):

    def save_user(self, request, sociallogin, form=None):
        """
        This is called when saving user via allauth registration.
        We override this to set additional data on user object.
        """
        # Do not persist the user yet so we pass commit=False
        # (last argument)
        user = super(UserAccountAdapter, self).save_user(request, sociallogin, form)
        new_spock = Spock(user=user)
        new_spock.save()
        user.save()