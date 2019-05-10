from django.shortcuts import render
from django.template import loader
from .models import Patient, Dentist, Staff, Appointment, Treatment

# Create your views here.
from django.http import HttpResponse


def index(request):
    return render(request, 'login.html')

def all_patients(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        address = request.POST.get('address')
        dob = request.POST.get('dob')
        insurance = request.POST.get('insurance')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        curp = request.POST.get('curp')
        allergies = request.POST.get('allergies')

        latest_patient = Patient.objects.latest('user_id')
        latest_patient_id = latest_patient.user_id
        
        patient = Patient((latest_patient_id + 1), first_name, last_name, email, dob, phone, address, False, curp, insurance, allergies)
        patient.save()
        
    patients_list = Patient.objects.all()
    template = loader.get_template('patients.html')
    context = {
        'patients_list': patients_list,
    }
    return HttpResponse(template.render(context, request))

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
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        address = request.POST.get('address')
        dob = request.POST.get('dob')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        specialty = request.POST.get('specialty')
        cedula = request.POST.get('cedula')
        rate = request.POST.get('hourly_rate')
        

        latest_dentist = Dentist.objects.latest('user_id')
        latest_dentist_id = latest_dentist.user_id
        
        dentist = Dentist((latest_dentist_id + 1), first_name, last_name, email, dob, phone, address, False, rate, cedula, specialty)
        dentist.save()

    dentists_list = Dentist.objects.all()
    template = loader.get_template('dentists.html')
    context = {
        'dentists_list': dentists_list,
    }
    return HttpResponse(template.render(context, request))

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
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        address = request.POST.get('address')
        dob = request.POST.get('dob')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        salary = request.POST.get('salary')
        staff_type = request.POST.get('staff_type')

        latest_staff = Staff.objects.latest('user_id')
        latest_staff_id = latest_staff.user_id
        
        staff = Staff((latest_staff_id + 1), first_name, last_name, email, dob, phone, address, False, salary, staff_type)
        staff.save()

    staff_list = Staff.objects.all()
    template = loader.get_template('staff.html')
    context = {
        'staff_list': staff_list,
    }
    return HttpResponse(template.render(context, request))

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
    if request.method == 'POST':
        patient_id = request.POST.get('patient_id')
        dentist_id = request.POST.get('dentist_id')
        date = request.POST.get('date')
        status = request.POST.get('status')
        description = request.POST.get('description')

        latest_appointment = Appointment.objects.latest('appointment_id')
        latest_appointment_id = latest_appointment.appointment_id
        
        appointment = Appointment((latest_appointment_id + 1), patient_id, dentist_id, date, status, description)
        appointment.save()

    appointments_list = Appointment.objects.all()
    template = loader.get_template('appointments.html')
    context = {
        'appointments_list': appointments_list,
    }
    return HttpResponse(template.render(context, request))

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
    if request.method == 'POST':
        appointment_id = request.POST.get('appointment_id')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')
        diagnostic = request.POST.get('diagnostic')
        medication = request.POST.get('medication')
        observations = request.POST.get('observations')

        latest_treatment = Treatment.objects.latest('treatment_id')
        latest_treatment_id = latest_treatment.appointment_id
        
        treatment = Treatment((latest_treatment_id + 1), appointment_id, start_date, end_date, diagnostic, medication, observations)
        treatment.save()

    treatments_list = Treatment.objects.all()
    template = loader.get_template('treatments.html')
    context = {
        'treatments_list': treatments_list,
    }
    return HttpResponse(template.render(context, request))

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