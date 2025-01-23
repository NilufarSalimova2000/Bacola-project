export interface BannerType {
    title?: string;
    description: string;
    image: string;
    id: number;
}

export interface BannerDataType {
    results?: {
        title?: string;
        description: string;
        image: string;
        id: number;
    }[];
}

export interface CategoryType {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        id: number;
        title: string;
        image: string;
        parent: number;
    }[];
};

export interface Categorytype {
    id: number;
    title: string;
    image: string;
    parent: number;
};

export interface ProductDataType {
    results: {
        id: number,
        image: string,
        title: string,
        price: string,
        is_available?: boolean,
        category?: number,
        is_new?: boolean
    }[]
}

export interface ProductType {
    id: number,
    image: string,
    title: string,
    price: string,
    is_available?: boolean,
    category?: number,
    is_new?: boolean
}

export interface SubcategoryType {
    results: [
        {}
    ]
}