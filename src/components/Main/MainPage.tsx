import { useEffect, createContext, MouseEvent, useCallback } from "react";
import axios from "axios";
import Products from "./Products/Products";
import Categories from "./SideBar/Categories";
import { Category, CategoryResult, Product, ProductResult } from "../../models";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCategories } from "../../store/categoriesSlice";
import { setProducts } from "../../store/productsSlice";
import { setFilter } from "../../store/filterSlice";
import { setFavs } from "../../store/favsSlice";
import "./index.scss";
import { Location, useLocation } from "react-router-dom";

interface AppContextProps {
    favLocation: boolean,
    filter: string,
    categories: CategoryResult[],
    favs: ProductResult[],
    filterProducts: (e: MouseEvent<HTMLButtonElement>) => void;
    addToFavs: (product: ProductResult) => void;
    getFavsFromLS: () => ProductResult[];
    refreshFavs: () => void;
}

export const AppContext = createContext<AppContextProps>({
    favLocation: false,
    filter: '8',
    categories: [],
    favs: [],
    filterProducts: () => {},
    addToFavs: () => {},
    getFavsFromLS: () => [],
    refreshFavs: () => {}
});

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const location: Location = useLocation();
    const favLocation = location.pathname === "/favs";

    const categories = useAppSelector((state) => state.categories.categories);
    const products = useAppSelector((state) => state.products.products);
    const filter = useAppSelector((state) => state.filter.filter);
    const favs = useAppSelector((state) => state.favs.favs);

    const CATEGORIES_URL =
        "https://playzoneland.site/products_test_api/api/products/category/";
    const PRODUCTS_URL = `https://playzoneland.site/products_test_api/api/products/product/?${
        filter === "8" ? "" : `category=${filter}`
    }`;

    const refreshFavs = useCallback(() => {
        dispatch(setFavs(getFavsFromLS()));
    }, [dispatch]);

    useEffect(() => {
        axios.get<Category>(CATEGORIES_URL).then((response) => {
            dispatch(setCategories(response.data.results));
        });

        axios.get<Product>(PRODUCTS_URL).then((response) => {
            dispatch(setProducts(response.data.results));
        });

        refreshFavs();
    }, [dispatch, PRODUCTS_URL, refreshFavs]);

    const filterProducts = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        dispatch(setFilter(target.id));
    };

    const getFavsFromLS = (): ProductResult[] => {
        const favs = localStorage.getItem("favs");
        return favs ? JSON.parse(favs) : [];
    };

    const addToFavs = (product: ProductResult) => {
        const favs = getFavsFromLS();
        const updatedFavs = favs.filter((fav) => fav.id !== product.id);
        if (favs.some((fav) => fav.id === product.id)) {
            localStorage.setItem("favs", JSON.stringify(updatedFavs));
        } else {
            localStorage.setItem("favs", JSON.stringify([...favs, product]));
        }
    };

    const showedProducts = favLocation ? getFavsFromLS() : products;
    const favsTitle = getFavsFromLS().length > 0 ? 'Избранное' : 'В избранном пока нет товаров';

    return (
        <AppContext.Provider
            value={{ favLocation, filter, categories, favs, filterProducts, addToFavs, getFavsFromLS, refreshFavs }}
        >
            <main className="cd-main-content">
                <Categories/>
                <section className="cards">
                    <h1 className="cards__title">{favLocation ? favsTitle : 'Каталог'}</h1>
                    <div className="container">
                        {showedProducts.map((product) => (
                            <Products product={product} key={product.id} />
                        ))}
                    </div>
                </section>
            </main>
        </AppContext.Provider>
    );
};

export default MainPage;
