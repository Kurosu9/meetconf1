from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GalleryViewSet

router = DefaultRouter()
router.register(r'gallery', GalleryViewSet, basename='gallery')
# router.register(r'roles', RoleViewSet, basename='role')
# router.register(r'conference_users', ConfUserViewSet, basename='conf-user')
# router.register(r'users', UserViewSet, basename='user')


urlpatterns = [
    path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls')),
]
