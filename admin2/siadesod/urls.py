from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('patients/all', views.all_patients, name='all_patients'),
    path('patients/add', views.add_patient, name='add_patient'),
    path('patients/update/<int:user_id>', views.update_patient, name='update_patient'),
    path('patients/delete/<int:user_id>', views.delete_patient, name='delete_patient'),
    path('dentists/all', views.all_dentists, name='all_dentists'),
    path('dentists/add', views.add_dentist, name='add_dentists'),
    path('dentists/update/<int:user_id>', views.update_dentist, name='update_dentist'),
    path('dentists/delete/<int:user_id>', views.delete_dentist, name='delete_dentist'),
    path('staff/all', views.all_staff, name='all_staff'),
    path('staff/add', views.add_staff, name='add_staff'),
    path('staff/update/<int:user_id>', views.update_staff, name='update_staff'),
    path('staff/delete/<int:user_id>', views.delete_staff, name='delete_staff'),
    path('appointments/all', views.all_appointments, name='all_appointments'),
    path('appointments/add', views.add_appointment, name='add_appointments'),
    path('appointments/update/<int:user_id>', views.update_patient, name='update_appointment'),
    path('appointments/delete/<int:user_id>', views.delete_patient, name='delete_appointment'),
    path('treatments/all', views.all_treatments, name='all_treatments'),
    path('treatments/add', views.add_treatment, name='add_appointments'),
    path('treatments/update/<int:user_id>', views.update_treatment, name='update_treatment'),
    path('treatments/delete/<int:user_id>', views.delete_treatment, name='delete_treatment'),
]