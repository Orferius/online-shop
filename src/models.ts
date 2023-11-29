export interface CategoryResult{
    id: number;
    name: string;
}

export interface Category {
    count: number;
    next: null | string;
    previous: null | string;
    results: CategoryResult[];
}

export interface ProductResult {
    id: number;
    name: string;
    price: string;
    category: number;
    rating: string;
    image: string;
}

export interface Product {
    count: number;
    next: null | string;
    previous: null | string;
    results: ProductResult[];
}
