# syntax=docker/dockerfile:1.4

FROM --platform=$BUILDPLATFORM node:18.10.0-bullseye-slim as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@15

COPY ./package*.json ./
RUN npm ci

COPY . .
RUN ls
RUN ls /usr/src/app
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
RUN ls
CMD ["ng", "serve", "--host", "0.0.0.0"]
