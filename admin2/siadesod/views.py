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
    patient = Patient(data[['user_id ']], data['password'], data['first_name'],  data['last_name'], data['email'], data['date_of_birth'], data['phone'], data['address'], data['gender'], data['Type'], data['admin'], data['curp'], data['insurance'], data['allergies'])
    patient.save()
    return HttpResponse(patient)

def update_patient(request, data):
    for key in data:
        patient = Patient.objects.get(data['user_id'])
        patient[key] = data[key]
        patient.save()

    return HttpResponse('Update patient goes here')

def delete_patient(request, user_id):
    Patient.objects.filter(pk=user_id).delete()
    return HttpResponse('Delete patient goes here')

def all_dentists(request):
    response = Dentist.objects.all()
    return HttpResponse(response)

def add_dentist(request, data):
    dentist = Dentist(data[['user_id ']], data['password'], data['first_name'],  data['last_name'], data['email'], data['date_of_birth'], data['phone'], data['address'], data['gender'], data['Type'], data['admin'], data['rate'], data['cedula'], data['specialty'])
    dentist.save()
    return HttpResponse(dentist)

def update_dentist(request, data):
    for key in data:
        dentist = Dentist.objects.get(data['user_id'])
        dentist[key] = data[key]
        dentist.save()
    return HttpResponse('Update Dentist goes here')

def delete_dentist(request, user_id):
    Dentist.objects.filter(pk=user_id).delete()
    return HttpResponse('Deleted successfully')

def all_staff(request):
    response = Staff.objects.all()
    return HttpResponse(response)

def add_staff(request, data):
    staff = Staff(data[['user_id ']], data['password'], data['first_name'],  data['last_name'], data['email'], data['date_of_birth'], data['phone'], data['address'], data['gender'], data['Type'], data['admin'], data['salary'], data['staff_type'])
    staff.save()
    return HttpResponse(staff)

def update_staff(request, data):
    for key in data:
        staff = Staff.objects.get(data['user_id'])
        staff[key] = data[key]
        staff.save()
    return HttpResponse('Update Dentist goes here')

def delete_staff(request, user_id):
    Patient.objects.filter(pk=user_id).delete()
    return HttpResponse('Deleted successfully')

def all_appointments(request):
    response = Appointment.objects.all()
    return HttpResponse(response)

def add_appointment(request, data):
    appointment = Appointment(data['appointment_id'], data['patient'], data['dentist'], data['date'], data['status'], data['description'])
    appointment.save()
    return HttpResponse('Create appointment goes here')

def update_appointment(request, data):
    for key in data:
        appointment = Appointment.objects.get(data['user_id'])
        appointment[key] = data[key]
        appointment.save()
    return HttpResponse('Create appointment goes here')

def delete_appointment(request, appointment_id):
    Appointment.objects.filter(pk=appointment_id).delete()
    return HttpResponse('Deleted successfully')

def all_treatments(request):
    response = Treatment.objects.all()
    return HttpResponse(response)

def add_treatment(request, data):
    appointment = Appointment(data['treatment_id'], data['appointment'], data['start_date'], data['end_date'], data['diagnostic'], data['medicine'], data['observations'])
    appointment.save()
    return HttpResponse('Create appointment goes here')

def update_treatment(request, data):
    for key in data:
        treatment = Treatment.objects.get(data['user_id'])
        treatment[key] = data[key]
        treatment.save()
    return HttpResponse('Update treatment')

def delete_treatment(request, treatment_id):
    Treatment.objects.filter(pk=treatment_id).delete()
    return HttpResponse('Deleted successfully')