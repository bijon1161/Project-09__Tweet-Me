from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

from accounts.views import (
    register_view,
    login_view,
    logout_view,
)
from tweets.views import (
    tweets_detail_view,
    tweets_list_view,
    # tweets_profile_view,
)

urlpatterns = [
    # path('react/', TemplateView.as_view(template_name='react_via_dj.html')),

    path('register', register_view),
    path('login', login_view),
    path('logout', logout_view),

    path('', tweets_list_view),
    path('<int:tweet_id>', tweets_detail_view),

    re_path(r'profiles?/',  include('profiles.urls')),
    re_path(r'api/profiles?/',  include('profiles.api.urls')),

    path('api/tweets/', include('tweets.api.urls')),
    path('admin/', admin.site.urls),

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
