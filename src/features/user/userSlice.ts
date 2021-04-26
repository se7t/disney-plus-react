import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialUserState = {
    name: string;
    email: string;
    photo: string;
};

type FinalUserState = {
    user: {
        name: string;
        email: string;
        photo: string;
    };
};

type SelectFunction = (state: FinalUserState) => string;

const initialState: InitialUserState = {
    name: '',
    email: '',
    photo: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (
            state: InitialUserState,
            action: PayloadAction<Record<string, string>>
        ) => {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                photo: action.payload.photo,
            };
        },

        setSignOutState: (state: InitialUserState) => {
            return {
                ...state,
                name: '',
                email: '',
                photo: '',
            };
        },
    },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName: SelectFunction = (state) => state.user.name;

export const selectUserEmail: SelectFunction = (state) => state.user.email;

export const selectUserPhoto: SelectFunction = (state) => state.user.photo;

export default userSlice.reducer;
