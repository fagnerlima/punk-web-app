# build environment
FROM node:12.18.3-alpine3.11 AS build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json /app/
RUN npm install --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.19.1-alpine

LABEL author="Fagner Lima" \
      email="contato@fagnerlima.pro.br" \
      description="Projeto Final da Disciplina de Introdução à JavaScript com React" \
      license="GPLv3"

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
