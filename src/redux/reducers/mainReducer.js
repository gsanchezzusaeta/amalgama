import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mockBooks } from "../../utils/mockBooks";
import { mockUsers } from "../../utils/mockUsers";

const initialState = {
    token: '',
    user: {},
    books: {},
    users: {},
    authors:{}
}

export const fetchBooksAndUsers = createAsyncThunk(
    'app/fetchBooksAndUsers',
    async () => {
    
        let books = mockBooks
        let users = mockUsers

        return { books: books.response, users: users.response };
    }
);

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAuthorizationToken: (state, action) => {
            state.token = action.payload
            window.location = '/home'
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooksAndUsers.fulfilled, (state, action) => {
                const { books, users } = action.payload;

                books.forEach((book) => {
                    state.books[book.id] = {
                        ...book,
                        authorId: book.author.id, 
                    };
                });

                users.forEach((user) => {
                    state.users[user.id] = {
                        ...user,
                        favoriteBookIds: user.favorite_books.map((fb) => fb.id),
                    };
                });

                books.forEach((book) => {
                    if (book.author) {
                        state.authors[book.author.id] = book.author;
                    }
                });
            });
    },
})

export const { setAuthorizationToken } = appSlice.actions
export default appSlice.reducer
