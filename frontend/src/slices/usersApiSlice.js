import {USER_URL} from "../constants";
import { apiSlice } from "./apiSlice"; 

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
         query: (data) => ({
            url: `${USER_URL}/auth`,
            method: 'POST',
            body: data,
         }),
         keepUnusedDataFor: 5 
        }),
    }),
});


export const { useLoginMutation } = usersApiSlice;