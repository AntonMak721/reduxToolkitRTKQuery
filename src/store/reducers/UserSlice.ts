import { IUser } from "../../models/IUser";
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { fetchUsers } from "./ActionCreator";
// import { fetchUsers } from "./ActionCreator";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    // count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    // count: 0
}


export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        // usersFetching(state){
        //     state.isLoading = true;
        // },
        // usersFetchingSucces(state, action : PayloadAction<IUser[]> ){
        //     state.isLoading = false;
        //     state.error=''
        //     state.users= action.payload;
        // },
        // usersFetchingError(state, action : PayloadAction<string> ){
        //     state.isLoading = false;
        //     state.error = action.payload
        // },


    
        // increment: (state, action: PayloadAction<number>)=>{
        //     state.count+=action.payload
        // },
        // decrement: (state, action: PayloadAction<number>)=>{
        //     state.count -=action.payload
        // }
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]:(state, action : PayloadAction<IUser[]> )=>{
            state.isLoading = false;
            state.error=''
            state.users= action.payload;
        },
        [fetchUsers.pending.type]:  (state)=>{
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]:  (state, action : PayloadAction<string> )=>{
            state.isLoading = false;
            state.error = action.payload
        },
    }
    
})

// export const {increment, decrement} = userSlice.actions

export default userSlice.reducer;