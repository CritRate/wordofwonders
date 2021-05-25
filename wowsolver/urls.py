from django.urls import path

from .views import home, solve

name = 'wowsolver'

urlpatterns = [
    path('', home, name='home'),
    path('solve/', solve, name='solve')
]