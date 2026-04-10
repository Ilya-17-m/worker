import logging
from flask import Flask, render_template, request

from conf import session
from models import WorkORM

app = Flask(__name__)
logger = logging.getLogger(__name__)


@app.route("/", methods=["GET"])
def main_page():
    return render_template("index.html")


@app.route("/", methods=["POST"])
def create_work():
    email = request.form.get("email")
    phone_number = request.form.get("phone_number")
    name = request.form.get("name")
    description = request.form.get("description")

    if "@" in email and len(str(phone_number)) == 11:
        work = WorkORM(
            name=name,
            email=email,
            phone_number=phone_number,
            description=description
        )
        session.add(work)
        session.commit()
        logger.info("Пользователь добавил заявку")

    logger.error("Заявка не прошла, некорректно передаемые значения.")
    return "К сожалению что-то пошло не так..."


if __name__ == "__main__":
    app.run(debug=True)

