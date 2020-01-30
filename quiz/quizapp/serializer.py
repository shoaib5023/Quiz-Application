
from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('name',)

class OptionSerializer(serializers.ModelSerializer):
    # question = QuestionSerializer()
    class Meta:
        model = Options
        fields = ('id',  'question','choice','isTrue',)

class QuestionSerializer(serializers.ModelSerializer):
    choice=OptionSerializer(read_only = True,   many=True)
    class Meta:
        model = Questions
        fields = ('id', 'question','choice',)