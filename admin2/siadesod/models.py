from django.db import models

# Create your models here.

class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    password = models.CharField(max_length =16)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45, unique=True)
    date_of_birth = models.DateField
    phone = models.CharField(max_length=22)
    address = models.CharField(max_length=150)

    class Meta:
        abstract = True
    
    GENDER_CHOICE = (
    ('M', 'Male'),
    ('F', 'Female'),
    )

    gender = models.CharField(max_length=1, choices = GENDER_CHOICE)

    TYPE_CHOICE = (
    ('P', 'Patient'),
    ('D', 'Dentist'),
    ('S', 'Staff'),
    )

    Type = models.CharField(max_length = 1, choices = TYPE_CHOICE)
    admin = models.BooleanField(default = False)

class Staff(User):
    #staff = models.OneToOneField(User, on_delete=models.DO_NOTHING, parent_link=True)
    #staff_id = models.ForeignKey(User, on_delete='DO_NOTHING', on_update='DO_NOTHING', unique=True)
    salary = models.IntegerField

    TYPE_CHOICE = (
    ('A', 'Administrative'),
    ('I', 'Intendance'),
    )

    staff_type = models.CharField(max_length = 1, choices = TYPE_CHOICE)

class Patient(User):
    #patient = models.OneToOneField(User, on_delete=models.DO_NOTHING, parent_link=True)
    #patiend_id = models.ForeignKey(User, on_delete='DO_NOTHING', on_update='DO_NOTHING', unique=True)
    curp = models.CharField(max_length = 18, unique=True)
    insurance = models.CharField(max_length = 45)
    allergies = models.CharField(max_length = 200)

class Dentist(User):
    #dentist = models.OneToOneField(User, on_delete=models.DO_NOTHING, parent_link=True)
    #dentist_id = models.ForeignKey(User, on_delete='DO_NOTHING', on_update='DO_NOTHING', unique=True)
    rate = models.IntegerField
    cedula = models.CharField(max_length = 45, unique=True)
    specialty = models.CharField(max_length = 45)

class Appointment(models.Model):
    appointment_id = models.IntegerField(primary_key=True)
    patient = models.ForeignKey(Patient, on_delete=models.DO_NOTHING)
    dentist = models.ForeignKey(Dentist, on_delete=models.DO_NOTHING)

    date = models.DateField

    STATUS_CHOICE = (
    ('P', 'Pending'),
    ('C', 'Canceled'),
    ('D', 'Done'),
    )

    status = models.CharField(max_length = 1, choices = STATUS_CHOICE)
    description = models.CharField(max_length = 45, default = 'Ninguno')

class Treatment(models.Model):
    treatment_id = models.IntegerField(primary_key=True)
    appointment = models.ForeignKey(Appointment, on_delete=models.DO_NOTHING)
    start_date = models.DateField
    end_date = models.DateField
    diagnostic = models.CharField(max_length = 100, default = 'Ninguno')
    medicine = models.CharField(max_length = 45, default = 'Ninguno')
    observations = models.CharField(max_length = 100)
