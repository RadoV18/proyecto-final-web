import { createAction, props } from '@ngrx/store';

export const addProduct = createAction (
    '[Product List] Add Product',
    props<{ productId: any; newQuantity: number }>()
);

export const removeProduct = createAction (
    '[Product List] Remove Product',
    props<{ productId: any }>()
);

export const reset = createAction(
    '[Product List] Reset'
)