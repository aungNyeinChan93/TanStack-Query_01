import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Rating = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

type Product = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number | string,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: {
        width: number,
        height: number,
        depth: number
    },
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Rating[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: {
        createdAt: string,
        updatedAt: string,
        barcode: string | number,
        qrCode: string,

    },
    images: string[],
    thumbnail: string
};

interface InitialState {
    products: Product[],
    isLoading: boolean,
    error: string | undefined
}

const initialState: InitialState = {
    products: [],
    isLoading: false,
    error: ''
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const { products } = await response.json();
    return products;
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
    }
});


export default productSlice;