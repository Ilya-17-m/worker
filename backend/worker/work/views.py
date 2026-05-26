import requests
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from logging import getLogger

from .serializer import WorkSerializer


logger = getLogger('__name__')


def send_message_on_telegram(data):
    bot_token = ''
    chat_id = ''

    message = (
        f'{data['first_name']} {data['last_name']} отправил вам новую заявку на сайт!\n'
        f'Телефон пользователя: {data['tel_number']}\n'
        f'Почта пользователя: {data['email']}\n'
        f'Тема заявки: {data['topic']}\n'
    )

    logger.info('The application in the telegram bot has been sent.')
    requests.post(
        f'https://api.telegram.org/bot{bot_token}/sendMessage',
        json={
            'chat_id': chat_id,
            'text': message,
        }
    )


class CreateWorkAPIView(APIView):
    """
        Create a new work
    """

    def post(self, request) -> Response:
        serializer = WorkSerializer(
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            send_message_on_telegram(request.data)
            logger.info('Serializer valid!')

            return Response(
                {'message': 'Sent successfully!'},
                status=status.HTTP_201_CREATED
            )

        logger.error('The serializer is not valid!')
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )