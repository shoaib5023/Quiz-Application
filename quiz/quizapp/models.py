from django.db import models
# Create your models here.
class Categories(models.Model):
    name = models.CharField(max_length=200,unique=True, null=True, blank=True)
    def __str__(self):
        return self.name
class Questions(models.Model):
    # category = models.ForeignKey(Categories,on_delete=models.CASCADE, related_name='question',null=True, blank=True)
    question = models.CharField(max_length=500,unique=True, null=True, blank=True)
    def __str__(self):
        return self.question
class Options(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE,related_name='choice',)
    choice = models.CharField(max_length=1000,null=False,blank=False)
    isTrue = models.BooleanField(default=False)
    # answer = models.BooleanField(default=False)
    class Meta:
        order_with_respect_to = 'choice'
    def __str__(self):
        return str(self.choice)
