
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import './styles/global.css';

function App() {
    return (
        <div className="wrapper">
            <Header className="header" />
            <HomePage />
        </div>
    );
}

export default App;
