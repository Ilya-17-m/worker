FROM python:3.12

WORKDIR /app

RUN pip install --upgrade pip \
    && poetry==2.2.1

COPY poetry.lock pyproject.toml ./

RUN poetry create virtualenvs false --no-root --no-ansi

RUN poetry install

COPY . .

CMD ["poetry", "run", "uvicorn", "worker.worker.asgi:application", "--bind"]