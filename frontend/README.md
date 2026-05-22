# Worker resume site


## Description: 
### The site is inspired by the authors resume. Has the functionality of changing the topic from night to day, sending a from so that the worker can contact the employer.

+ [Technologies](#technologies)
+ [Team project](#team-project)
+ [Connect package](#connect-package)


## Technologies:

+ JavaScript
+ HTML
+ CSS
+ Swiper
+ FontAwesome
+ Devicon
+ Choices.js


## Connect package:
1. Collect the package: in the frontend directory, execute the command: 
#### ```pip install -e .```

2. In `settings.py` add package
```python
INSTALLED_APPS = [
        ...
        'frontend',
    ]
```
3. In `urls.py` add:
```python
urlpatterns = [
    path("", include("frontend.urls")),
    ...
]
```


### Team project:
#### Contacts: +7-777-369-98-56
#### Email: ilya.melnichuk.2007@mail.ru
+ Melnichuk Ilya | Backend-Developer (Python)