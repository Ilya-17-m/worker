from django.db import models


class WorkModel(models.Model):
    first_name = models.CharField(max_length=55, null=False)
    last_name = models.CharField(max_length=55)
    email = models.EmailField(null=False)
    tel_number = models.CharField(max_length=12)
    topic = models.TextField(null=False)

    class Meta:
        db_table = 'work'
        ordering = ['-id',]