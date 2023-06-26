# Aula 01 Criar projeto React JS com o Vite, Estrutura do projeto

## Criar projeto React JS

1. Crie uma pasta no seu H
2. Abra o VsCode e abra a pasta criada
3. Abra o terminal de comandos do VsCode, pode ser usando o atalho:  CTRL + J ou CTRL + '
4. Pressione enter e confirme se o caminho do terminal está na pasta que você criou
5. Digite o seguinte comando:

`npm create vite@latest portfolio `

> Acesse o link https://vitejs.dev para mais informações sobre o vite

6. Após o comando, abrirá um leque de opções a serem selecionadas:
7. Primeiro digite Y e enter
8. Selecione o framework react e enter
9. Selecione JavaScript e enter
10. Em seguida siga as instruções geradas pela criação do projeto: As instruções são as seguintes
11. Entre na pasta portfolio que você acabou de criar

`cd portfolio`

12. Digite o comomando abaixo para criar a pasta nodemodules:

`npm install`

Aguarde o processo de criação do projeto com o Vite.

13. No terminal integrado do VS Code digite o comando abaixo para carregar a aplicação no seu browser:

`npm run dev`

Aguarde o carregamento da Aplicação React no seu browser,
irá abrir no endereço local : terá um endereço IP. 
14. Precione CTRL e clique sobre o link do IP

Na raiz do projeto abra o index.html

> Mude o título da página para `<title>Portfólio</title>`

Salve a alteração (CTRL + S) e veja o resultado no browser.

15. Na estrutura de pastas dentro de SRC está o arquivo App.jsx abra ele.

15.1 Apague todo o conteúdo que está dentro do fragmento do return e digite
~~~html
<h1>Olá Mundo!</h1>
~~~
15.2 Apague a `const count do useState` que não vamos usar nesse projeto

15.3 Apague as linhas de `import` que não estão mais sendo usadas

Salve a alteração (CTRL + S) e veja o resultado no browser.

16. Apague os arquivos `vite.svg` que está na pasta `public` e o arquivo `react.svg` que está na pasta assets dentro de `src`.

> Após apagar o arquivo vite.svg o favicon da página não irá aparecer. Não se preocupe, vc vai usar o seu próprio favicon.

Estes são os passos básicos para criar um projeto react usando Vite.

Espero ter ajudado um pouco, até a próxima.
