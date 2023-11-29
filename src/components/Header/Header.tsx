import { Link } from "react-router-dom";
import "./header.scss";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div>
                    <Link to="/" className="header__logo">
                        Online shop
                    </Link>
                </div>

                <nav>
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/" className="header__link">
                                Главная
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to="/favs" className="header__link">
                                Избранное
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
