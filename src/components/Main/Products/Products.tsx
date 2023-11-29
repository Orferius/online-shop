import { useContext } from "react";
import { AppContext } from "../MainPage";
import { ProductResult } from "../../../models";
import "./products.scss";

interface ProductsProps {
    product: ProductResult;
}

const Products: React.FC<ProductsProps> = ({ product }: ProductsProps) => {
    const { addToFavs, favs, refreshFavs } = useContext(AppContext);
    const isProductInFavs = favs.some((fav) => fav.id === product.id);

    const handleAddToFavs = () => {
        addToFavs(product);
        refreshFavs();
    };

    return (
        <div className="card">
            <div className="card__top">
                <img
                    src={product.image}
                    alt={product.name}
                    className="card__img"
                />
            </div>
            <div className="card__middle">
                <a href="/" className="card__title">
                    {product.name}
                </a>
                <div className="card__rating">{product.rating}</div>
            </div>
            <div className="card__bottom">
                <div className="card__price">{product.price}</div>
                <button
                    className={
                        !isProductInFavs
                            ? "card__btn green-btn"
                            : "card__btn green-btn green-btn__true"
                    }
                    onClick={handleAddToFavs}
                >
                    <i
                        className={
                            !isProductInFavs
                                ? "bi bi-heart"
                                : "bi bi-heart-fill"
                        }
                    ></i>
                </button>
            </div>
        </div>
    );
};

export default Products;
