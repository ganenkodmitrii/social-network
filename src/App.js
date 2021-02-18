import './App.css';
import socialImg from './images/socialImg.jpg';
import backImage from './images/backImage.jpg';
const App = () => {
    return (
        <div className="app">
            <header className="header">
                <div className="boxImg">
                    <img src={socialImg} style={{ width: '25px' }} />
                </div>
                <div>text</div>
            </header>
            <nav className="nav">
                <div>
                    <ul>
                        <li>Profile</li>
                        <li>Messages</li>
                        <li>News</li>
                        <li>Music</li>
                        <li>Settings</li>
                    </ul>
                </div>
            </nav>
            <main className="main">
                <div>
                    <img src={backImage} />
                </div>
                <div>
                    <ul>
                        <li>ava + description</li>
                        <li>my post</li>
                        <li>
                            <div>
                                new post
                                <ul>
                                    <li>post 1</li>
                                    <li>post 2</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <footer className="footer">
                <div>text</div>
            </footer>
        </div>
    );
};

export default App;
