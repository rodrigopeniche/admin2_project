from django.db import models
import json

# Create your models here.

class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45, unique=True)
    date_of_birth = models.DateField(null=True)
    phone = models.CharField(max_length=22)
    address = models.CharField(max_length=150)

    class Meta:
        abstract = True
    
    admin = models.BooleanField(default = False)

class Staff(User):
    salary = models.IntegerField(default=0)

    TYPE_CHOICE = (
    ('A', 'Administrative'),
    ('I', 'Intendance'),
    )

    staff_type = models.CharField(max_length = 1, choices = TYPE_CHOICE)


class Patient(User):
    curp = models.CharField(max_length = 18, unique=True)
    insurance = models.CharField(max_length = 45)
    allergies = models.CharField(max_length = 200)


class Dentist(User):
    hourly_rate = models.IntegerField(default=0)
    cedula = models.CharField(max_length = 45, unique=True)
    specialty = models.CharField(max_length = 45)
   

class Appointment(models.Model):
    appointment_id = models.IntegerField(primary_key=True)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    dentist = models.ForeignKey(Dentist, on_delete=models.CASCADE)

    date = models.DateField(null=True)

    STATUS_CHOICE = (
    ('P', 'Pending'),
    ('C', 'Canceled'),
    ('D', 'Done'),
    )

    status = models.CharField(max_length = 1, choices = STATUS_CHOICE)
    description = models.CharField(max_length = 45, default = 'Ninguno')


class Treatment(models.Model):
    treatment_id = models.IntegerField(primary_key=True)
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)
    diagnostic = models.CharField(max_length = 100, default = 'Ninguno')
    medicine = models.CharField(max_length = 45, default = 'Ninguno')
    observations = models.CharField(max_length = 100)

