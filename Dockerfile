FROM ubuntu:latest
LABEL authors="reala"

ENTRYPOINT ["top", "-b"]