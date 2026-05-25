from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import WorkModel
from .serializer import WorkSerializer


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

            return Response(
                {'message': 'Sent successfully!'},
                status=status.HTTP_201_CREATED
            )

        print('Сериализер не валиден:', serializer.errors)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )