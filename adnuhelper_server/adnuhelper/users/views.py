from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm


def home(request):
    return render(request, 'users/home.html')
    
def home2(request):
    return render(request, 'users/home2.html')

def accounts(request):
    return render(request, 'users/accounts.html')

def notification(request):
    return render(request, 'users/notif.html')


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()


            messages.success(request, f'Your account has been created. You can log in now!')
            return redirect('login')
    else:
        form = UserCreationForm()


    context = {'form': form}
    return render(request, 'users/register.html', context)

def request_page(request):
    return render(request, 'users/request.html')

def chat(request):
    return render(request, 'users/chat.html')

def customer_service(request):
    return render(request, 'users/customer_service.html')

def submitted(request):
    return render(request, 'users/submitted.html')