import Header from '../../components/header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase
