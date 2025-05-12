FROM rasa/rasa:latest

WORKDIR /app
COPY . /app

EXPOSE 5005

CMD ["run", "--enable-api", "--cors", "*"]
