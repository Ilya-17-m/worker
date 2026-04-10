from pydantic import BaseModel


class WorkSchema(BaseModel):
    name: str
    email: str
    phone_number: int
    description: str

