from django.contrib import admin
from django.urls import path
from quizapp.views import QuestionViewSet
from rest_framework.routers import DefaultRouter
urlpatterns = [
    path('admin/', admin.site.urls),
]
router = DefaultRouter()
router.register(r'quiz', QuestionViewSet, basename ='quiz'),
# router.register(r'answer',AnswerViewSet, basename ='answer')
urlpatterns += router.urls