# Aula 03 Criar Rotas, Páginas e Links no React JS

## Criar página Home

1. Abra o arquivo `App.jsx`
2. Selecione da linha 8 até a 26, toda a área do fragmento (return), recorte esse código e salve em um arquivo texto.
3. Na linha 2 digite apenas `<h1>Home</h1>`
4. Apague as duas linhas de import do Header e Footer
5. Salve o arquivo.
6. Dentro da pasta pages crie a pasta `Home`
7. Dentro de `Home` crie os arquivos `index.jsx` e `Home.module.css`
8. Abra o arquivo index.jsx
9. Faça o seguinte código:

> Observação, dentro do return cole o código que recortamos lá de App.jsx

~~~javascript
import Footer from './components/Footer'
import Header from './components/Header'

function Home() {
    return (
       <>
          <Header />
          <section className='container'>
            <div className='apresentacao'>
              <p>
                Olá, sou <br/>
                <span>Sandra Alves</span> <br/>
                Dev Full Stack
              </p>
              <button className='btn btn-red'>
                Saiba mais sobre mim
              </button>
            </div>
            <figure>
              <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
            </figure>
          </section>
          <Footer />
        </> 
    )
}

export default Home

~~~

10. Salve as alterações e feche.

## Criar rotas no React JS

1. No terminal digite o seguinte comando:
`npm install react-router-dom`

2. Em `src` crie o arquivo `routes.jsx`

> O Vite e o ESList exigem que você mantenha um padrão nos nomes dos arquivos. Por isso, estamos usando a extensão .jsx

~~~javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes

~~~

3. Editar App.jsx

~~~javascript
import AppRoutes from './routes'

function App() {

  return (
    <AppRoutes />
  )
}

export default App

~~~

4. Editar o `index.jsx` do componente `Header`

> Vamos substituir as tags a pelo componente Link do react-router-dom

Veja como deve ficar o código do arquivo

~~~javascript
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Sandra Alves</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default Header

~~~

5. Salve as alterações e faça os testes de navegação com os links do Header no browser.

## Ajuste no link do botão Saiba mais sobre mim

1. Abra o arquivo index.jsx de Home
2. Mude a tag button por Link

~~~javascript
<Link to="/sobre" className='btn btn-red'>
    Saiba mais sobre mim
</Link>

~~~

3. Faça o importe do componente Link do react-router-dom
`import { Link } from 'react-router-dom'`

4. Salve as alterações e faça os testes no browser

5. Ele perdeu a formatação CSS, mas, vamos ajustar. 

## Ajuste no botão Saiba mais 

1. Abra o arquivo `App.css`
2. No seletor .btn adicione as seguintes propriedades:

~~~css
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
~~~

3. Salve as alterações e veja o resultado no browser.

