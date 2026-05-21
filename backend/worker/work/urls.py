from django.urls import path

from .views import CreateWorkAPIView

app_name = 'work'


urlpatterns = [
    path('work/', CreateWorkAPIView.as_view(), name='create_new_work')
]