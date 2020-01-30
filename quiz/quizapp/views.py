from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .serializer import *
from django.shortcuts import get_object_or_404
class QuestionViewSet(viewsets.ViewSet):
    """
    Example empty viewset demonstrating the standard
    actions that will be handled by a router class.
    If you're using format suffixes, make sure to also include
    the `format=None` keyword argument for each action.
    """
    def list(self, request):
        queryset = Questions.objects.all()
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = QuestionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
   
    def retrieve(self, request, pk=None):
        queryset = Questions.objects.all()
        option = get_object_or_404(queryset, pk=pk)
        serializer = QuestionSerializer(option)
        return Response(serializer.data)
   
    def update(self, request, pk=None):
        pass
   
    def partial_update(self, request, pk=None):
        pass
   
    def destroy(self, request, pk=None):
        pass
#
# class AnswerViewSet(viewsets.ViewSet):
#     """
#     Example empty viewset demonstrating the standard
#     actions that will be handled by a router class.
#
#     If you're using format suffixes, make sure to also include
#     the `format=None` keyword argument for each action.
#     """
#
#     def list(self, request):
#         queryset = Answer.objects.all()
#         serializer = AnswerSerializer(queryset, many=True)
#         return Response(serializer.data)
#
#     def create(self, request):
#         pass
#
#     def retrieve(self, request, pk=None):
#         queryset = Questions.objects.all()
#         answer = get_object_or_404(queryset, pk=pk)
#         serializer = AnswerSerializer(answer)
#         return Response(serializer.data)
#
#     def update(self, request, pk=None):
#         pass
#
#     def partial_update(self, request, pk=None):
#         pass
#
#     def destroy(self, request, pk=None):
#         pass