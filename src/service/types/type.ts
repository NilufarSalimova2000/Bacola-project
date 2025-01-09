export interface BannerType {
    title: string;
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