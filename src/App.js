import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

const App = ({ state }) => {
    // console.log(state);
    return (
        <Container>
            <Header />
            <NavBar />
            <Main state={state} />
            <Search />
            <Footer />
        </Container>
    );
};

export default App;
