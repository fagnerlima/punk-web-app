# unipe-punk-web-app

Projeto Final da disciplina de Introdução à JavaScript com React, da Especialização de Desenvolvimento de Aplicações para Web, da Unipê.

## Execução via Docker

Execute o comando abaixo para baixar a imagem Docker do [unipe-punk-web-app](https://hub.docker.com/repository/docker/fagnerlima/unipe-punk-web-app):

```
docker pull fagnerlima/unipe-punk-web-app:1.0.0
```

Para iniciar um container da aplicação execute o seguinte comando:

```
docker run -d --name=unipe-punk-web-app -p 8081:80 fagnerlima/unipe-punk-web-app:1.0.0
```

A aplicação estará disponível em http://localhost:8081.

## Criação de Imagem Docker

Para gerar uma nova imagem Docker basta executar o script abaixo informando a versão como parâmetro único:

```
./build.sh 1.1.0
```

Após a execução do script serão geradas duas imagens: uma com a versão especificada e outra a versão *latest*.

## License

GPLv3 2007
