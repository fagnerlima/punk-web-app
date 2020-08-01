# unipe-punk-web-app

Projeto Final da disciplina de Introdução à JavaScript com React, da Especialização de Desenvolvimento de Aplicações para Web, da Unipê.

## Execução via Docker

Execute o comando abaixo para baixar a imagem Docker do [unipe-punk-web-app](https://hub.docker.com/repository/docker/fagnerlima/unipe-punk-web-app):

```
docker pull fagnerlima/unipe-punk-web-app:1.0.0
```

Para iniciar um container da aplicação, execute o seguinte comando:

```
docker run -d --name=unipe-punk-web-app -p 8081:80 fagnerlima/unipe-punk-web-app:1.0.0
```

A aplicação estará disponível em http://localhost:8081.

## License

GPLv3 2007
