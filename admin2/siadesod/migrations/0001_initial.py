# Generated by Django 2.1.5 on 2019-05-09 02:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('appointment_id', models.IntegerField(primary_key=True, serialize=False)),
                ('status', models.CharField(choices=[('P', 'Pending'), ('C', 'Canceled'), ('D', 'Done')], max_length=1)),
                ('description', models.CharField(default='Ninguno', max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Dentist',
            fields=[
                ('user_id', models.IntegerField(primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=16)),
                ('first_name', models.CharField(max_length=45)),
                ('last_name', models.CharField(max_length=45)),
                ('email', models.CharField(max_length=45, unique=True)),
                ('phone', models.CharField(max_length=22)),
                ('address', models.CharField(max_length=150)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('Type', models.CharField(choices=[('P', 'Patient'), ('D', 'Dentist'), ('S', 'Staff')], max_length=1)),
                ('admin', models.BooleanField(default=False)),
                ('cedula', models.CharField(max_length=45, unique=True)),
                ('specialty', models.CharField(max_length=45)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('user_id', models.IntegerField(primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=16)),
                ('first_name', models.CharField(max_length=45)),
                ('last_name', models.CharField(max_length=45)),
                ('email', models.CharField(max_length=45, unique=True)),
                ('phone', models.CharField(max_length=22)),
                ('address', models.CharField(max_length=150)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('Type', models.CharField(choices=[('P', 'Patient'), ('D', 'Dentist'), ('S', 'Staff')], max_length=1)),
                ('admin', models.BooleanField(default=False)),
                ('curp', models.CharField(max_length=18, unique=True)),
                ('insurance', models.CharField(max_length=45)),
                ('allergies', models.CharField(max_length=200)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('user_id', models.IntegerField(primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=16)),
                ('first_name', models.CharField(max_length=45)),
                ('last_name', models.CharField(max_length=45)),
                ('email', models.CharField(max_length=45, unique=True)),
                ('phone', models.CharField(max_length=22)),
                ('address', models.CharField(max_length=150)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('Type', models.CharField(choices=[('P', 'Patient'), ('D', 'Dentist'), ('S', 'Staff')], max_length=1)),
                ('admin', models.BooleanField(default=False)),
                ('staff_type', models.CharField(choices=[('A', 'Administrative'), ('I', 'Intendance')], max_length=1)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Treatment',
            fields=[
                ('treatment_id', models.IntegerField(primary_key=True, serialize=False)),
                ('diagnostic', models.CharField(default='Ninguno', max_length=100)),
                ('medicine', models.CharField(default='Ninguno', max_length=45)),
                ('observations', models.CharField(max_length=100)),
                ('appointment', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='siadesod.Appointment')),
            ],
        ),
        migrations.AddField(
            model_name='appointment',
            name='dentist',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='siadesod.Dentist'),
        ),
        migrations.AddField(
            model_name='appointment',
            name='patient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='siadesod.Patient'),
        ),
    ]
