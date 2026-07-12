# 💼 Worker Resume Website (Backend)

Backend-часть персонального сайта-портфолио, разработанная на **Django** и **Django REST Framework**.

Проект предоставляет REST API для сайта-резюме, где пользователи могут отправлять сообщения, вопросы и предложения о сотрудничестве. Все отправленные заявки автоматически пересылаются в Telegram-бота для оперативной обработки.

Кроме того, приложение поддерживает персональные настройки пользователя, включая выбор языка интерфейса и темы оформления.

---

# 🚀 Features

- 📩 Contact form with Telegram integration
- 🤖 Automatic message delivery to Telegram
- 🌍 Multi-language support
  - English
  - Russian
  - Kazakh
- 🎨 Light and Dark themes
- ✅ Client-side form validation
- 📖 REST API
- 📑 Swagger & ReDoc documentation
- 📊 Application monitoring
- 📝 Centralized logging

---

# 📑 Contents

- [Technologies](#-technologies)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Documentation](#-documentation)
- [Monitoring](#-monitoring)
- [Project Structure](#-project-structure)
- [Author](#-author)

---

# 🛠 Technologies

## Backend

- Python
- Django
- Django REST Framework
- PostgreSQL

## Infrastructure

- Docker

## Monitoring

- Grafana
- Loki

## Frontend

- HTML5
- CSS3
- JavaScript

## UI Libraries

- JustValidate
- Choices.js
- Swiper
- Font Awesome
- Devicon

---

# 🏗 Architecture

The project consists of two independent parts:

```
backend/
```

Provides:

- REST API
- Contact form processing
- Telegram integration
- Database interaction
- User settings
- Monitoring and logging

---

```
frontend/
```

Responsible for:

- User interface
- Form validation
- Theme switching
- Language switching
- Responsive layout

---

# 🚀 Getting Started

Project configuration and installation instructions are available in the corresponding directories:

```
backend/README.md
```

and

```
frontend/README.md
```

---

# 📖 Documentation

After running the backend server, the API documentation is available at:

### Swagger UI

```
http://127.0.0.1:8000/api/swagger/
```

### ReDoc

```
http://127.0.0.1:8000/api/redoc/
```

---

# 📊 Monitoring

The application supports monitoring and centralized logging using:

- Grafana
- Loki

These tools help monitor application performance and simplify troubleshooting.

---

# 📂 Project Structure

```
worker-resume-site/
│
├── backend/
│   ├── README.md
│   ├── __init__.py
│   └── worker/
│         ├── work/
│         ├── worker/
│         ├── __init__.py
│         └── manage.py
│   
│   
│   
│
├── frontend/
│   ├── frontend/
│   └── swagger/
│        └── swagger.yaml
│   
│   
│
├── .env.template
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yaml
├── nginx.conf
├── poetry.lock
├── pyproject.toml
└── README.md
```

---

# 👨‍💻 Author

**Melnichuk Ilya**

Python Backend Developer

📞 +7 (777) 369-98-56

📧 ilya.melnichuk.2007@mail.ru
