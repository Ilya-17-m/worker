import logging.config
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models import Base


engine = create_engine("sqlite:///worker_resume.db")
Base.metadata.create_all(engine)

Session = sessionmaker(engine, expire_on_commit=False)

session = Session()


logging.config.dictConfig({
    "version": 1,
    "disable_existing_loggers": False,

    "formatters": {
        "console": {
            "format": "%(asctime)s %(name)s %(lineno)s %(module)s %(message)s"
        },
    },

    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "console",
        },
    },

    "loggers": {
        "": {
            "level": "INFO",
            "handlers": [
                "console"
            ]
        }
    }
})