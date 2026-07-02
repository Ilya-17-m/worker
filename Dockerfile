FROM python:3.12-slim

WORKDIR /app

RUN pip install --upgrade pip
RUN pip install poetry==2.2.1

COPY poetry.lock pyproject.toml README.md ./

RUN poetry create virtualenvs false --no-root --no-ansi

RUN poetry install --no-root

COPY . .

EXPOSE 8000

CMD ["poetry", "run", "uvicorn", "worker.worker.asgi:application", "--bind"]
