import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

const App = ({ appState }) => {
    console.log(appState);
    return (
        <Container>
            <Header />
            <NavBar />
            <Main props={appState} />
            <Search />
            <Footer />
        </Container>
    );
};

export default App;
