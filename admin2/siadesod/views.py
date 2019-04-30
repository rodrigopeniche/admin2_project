from django.shortcuts import render
from .models import Patient, Dentist, Staff, Appointment, Treatment

# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def all_patients(request):
    response = Patient.objects.all()
    return HttpResponse(response)

def add_patient(request, data):
    patient = Patient(data[0], data[1], data[2],  data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15])
    patient.save()
    return HttpResponse(patient)

def update_patient(request, user_id, fields):
    #Patient.objects.filter(pk=user_id).update(field1='some value')
    return HttpResponse('Update patient goes here')

def delete_patient(request, user_id):
    Patient.objects.filter(pk=user_id).delete()
    return HttpResponse('Delete patient goes here')

def all_dentists(request):
    response = Dentist.objects.all()
    return HttpResponse(response)

def add_dentist(request, data):
    dentist = Patient(data[0], data[1], data[2],  data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15])
    dentist.save()
    return HttpResponse(dentist)

def update_dentist(request, user_id, fields):
    # pending
    return HttpResponse('Update Dentist goes here')

def delete_dentist(request, user_id):
    Dentist.objects.filter(pk=user_id).delete()
    return HttpResponse('Deleted successfully')

def all_staff(request):
    response = Staff.objects.all()
    return HttpResponse(response)

def add_staff(request, data):
    staff = Patient(data[0], data[1], data[2],  data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14])
    staff.save()
    return HttpResponse(staff)

def update_staff(request):
    #pending
    return HttpResponse('Update Dentist goes here')

def delete_staff(request, user_id):
    Patient.objects.filter(pk=user_id).delete()
    return HttpResponse('Deleted successfully')

def all_appointments(request):
    response = Appointment.objects.all()
    return HttpResponse(response)

def add_appointment(request, data):
    appointment = Appointment(data[0], data[1], data[2], data[3], data[4], data[5])
    appointment.save()
    return HttpResponse('Create appointment goes here')

def update_appointment(request):
    return HttpResponse('Create appointment goes here')

def delete_appointment(request, appointment_id):
    Appointment.objects.filter(pk=appointment_id).delete()
    return HttpResponse('Deleted successfully')

def all_treatments(request):
    response = Treatment.objects.all()
    return HttpResponse(response)

def add_treatment(request, data):
    appointment = Appointment(data[0], data[1], data[2], data[3], data[4], data[5], data[6])
    appointment.save()
    return HttpResponse('Create appointment goes here')

def update_treatment(request):
    return HttpResponse('Update treatment')

def delete_treatment(request):
    Treatment.objects.filter(pk=appointment_id).delete()
    return HttpResponse('Deleted successfully')