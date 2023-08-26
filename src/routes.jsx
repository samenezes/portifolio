import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import Projetos from './pages/projetos'
import Contatos from './pages/contatos'
import Page404 from './pages/page404'
import PageBase from './pages/PaginaBase'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes