import {USER_URL} from "../constants";
import { apiSlice } from "./apiSlice"; 

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
         query: (data) => ({
            url: `${USER_URL}/login`,
            method: 'POST',
            body: data,
         }),
         keepUnusedDataFor: 5 
        }),
    }),
});


export const { useLoginMutation } = usersApiSlice;