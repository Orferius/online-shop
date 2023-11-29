import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainPage from "../Main/MainPage";

function App() {
    return (
        <Router>
            <div className="page">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/favs" element={<MainPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
