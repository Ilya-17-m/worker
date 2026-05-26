# Worker resume site, frontend part.


## Description: 
### The site is inspired by the authors resume. Has the functionality of changing the topic from night to day, sending a from so that the worker can contact the employer.

+ [Technologies](#technologies)
+ [Team project](#author-project)
+ [Connect package](#connect-package)
+ + [Documentation](#documentation)


## Technologies:

+ JavaScript
+ HTML
+ CSS
+ Swiper
+ FontAwesome
+ Devicon
+ Choices.js
+ JustValidate


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
## Documentation

### You can find the frontend documentation in the swagger directory.

### Author project:
#### Contacts: +7-777-369-98-56
#### Email: ilya.melnichuk.2007@mail.ru
+ Melnichuk Ilya | Backend-Developer (Python)