## API de rastreio de encomendas dos Correios.  

### Ambiente DEV

Para iniciar utilize:
  
```shell script
node src/index.js
```

ou

```shell script
yarn dev
```

### Ambiente PROD

Para executar o *build* de criação da imagem Docker, execute o seguinte comando:

```shell script
docker build -t <tag> .
```

Para executar a imagem criada utilize:

```shell script
docker run -d --restart always --name <nome-do-container> -p 9090:3000 <tag>
```
