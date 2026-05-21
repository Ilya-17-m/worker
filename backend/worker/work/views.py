from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import WorkModel
from .serializer import WorkSerializer


class CreateWorkAPIView(APIView):

    def post(self, request) -> Response:
        new_work = WorkModel.objects.create(
            first_name=request.data.get('first_name'),
            last_name=request.data.get('last_name'),
            email=request.data.get('email'),
            tel_number=request.data.get('tel_number'),
            topic=request.data.get('topic')
        )

        serializer = WorkSerializer(
            new_work,
            data=request.data,
            many=True
        )
        if serializer.is_valid():
            return Response({}, status=status.HTTP_201_CREATED)

        return Response({}, status=status.HTTP_400_BAD_REQUEST)