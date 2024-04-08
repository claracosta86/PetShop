# PetShop

## Modo de execução:
### 1. Clonar o repositório em seu ambiente de execução;
### 2. Back end:
     #### entrar na pasta api (cd api); 
     #### usar o comando virtualenv -p python3 venv para criar o ambiente virtual e ativá-lo com o comando source '.venv/bin/activate'
     #### usar os comandos pip3 install FLask e pip3 install Flask-CORS;
     #### transferir o arquivo main.py da pasta api para a pasta venv e usar o comando python3 main.py para iniciar o back end;
     #### *esses comandos são para WSL, verfique as adaptações de seu sistema operacional.
### 3. Front end:
    #### entrar na pasta PetShop (cd petShop);
    #### usar o comando npm install para instalar os módulos do node e npm install react-router-dom e npm install axious para instalar dois módulos extras;
    #### usar o comando npm start para iniciar o localhost;
    #### espera-se que o node-js já esteja instalado.
### 4. Abrir o link do localhost e interagir com a página.

## Lista de premissas:
### 1. O cliente sabe o objetivo do site;
### 2. Todas as três variáveis na pagina /datapage serão preenchidas (data, número de cachorros pequenos, número de cachorros grandes - mesmo que os números sejam 0) segundo o formato exigido.

## Decisões de projeto:
### 1. Como requisitado, foi utilizado React para o front end, com o React js e a linguagem JavaScript;
### 2. O back end foi feito em python com o framework Flask;
### 3. Para construir o ambiente foi utilizado Vite.

## Informações a mais:
### Foi meu primeiro projeto em React, por isso algumas implementações podem não ter sido as mais eficientes e algumas falhas podem ter passado despercebidas.
