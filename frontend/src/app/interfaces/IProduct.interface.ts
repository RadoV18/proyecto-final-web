interface IImage {
    type: string;
    data: string;
}
export interface IProduct {
    code: number | null;
    name: string;
    description: string;
    brand: string;
    stock: number | null;
    price: number | null;
    categories: string[];
    image: IImage;
}