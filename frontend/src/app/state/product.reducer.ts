import { createReducer, on } from '@ngrx/store';

import { addProduct, removeProduct, reset } from './product.actions';
import { ProductCard } from '../product-card/product-card.model';

export const initialState: Array<ProductCard> = [
    {
        id: '1012',
        code: 1,
        name: 'Extra Creamy Milk Chocolate EXCELLENCE Bar (3.5 oz)',
        description: 'The ultimate milk chocolate experience-an exceptionally smooth and creamy recipe. EXCELLENCE Extra Creamy is a pure milk chocolate bar. Expertly crafted with the finest ingredients by the Master Chocolatiers at Lindt.',
        brand: 'IguiPene',
        availability: 'En Stock',
        stock: 10,
        price: 200,
        categories: 'Leche',
        extension: '/assets/img/products/1.jpg'
    },
];

export const productReducer = createReducer(
    initialState,
    on(addProduct, (state, { productId, newQuantity }) => state.map((product) => {
        return product.id === productId ? {...product, quantity: newQuantity } : product
    })),
    on(removeProduct, (state, { productId }) => state.map((product) => {
        return product.id === productId ? {...product, quantity: 0} : product
    })),
    on(reset, (state) => initialState)
);