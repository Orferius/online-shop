import { useContext } from "react";
import { AppContext } from "../MainPage";
import "./categories.scss";

const Categories: React.FC = () => {
    const { favLocation, filter, categories, filterProducts } =
        useContext(AppContext);

    const categoryButtons = categories.map((category) => {
        const cssClass =
            filter === String(category.id)
                ? "filter__btn filter__btn--active"
                : "filter__btn";

        return (
            <button
                className={cssClass}
                id={String(category.id)}
                value={category.name}
                key={category.name}
                type="button"
                onClick={(e) => filterProducts(e)}
            >
                {category.name}
            </button>
        );
    });

    return (
        <>
            {favLocation ? null : (
                <div className="sidebar">
                    <h2 className="sidebar__title">Категории</h2>{" "}
                    {categoryButtons}
                </div>
            )}
        </>
    );
};

export default Categories;
