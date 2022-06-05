import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from '../../helper/store';
import Contact from '../../models/Contact'

// initial state data
import {initialState as contactList } from "../../initial-data/Contacts";

export const contactSlice = createSlice({
    name: "contact",
    initialState: contactList,
    reducers: {
        create: (state, action: PayloadAction<Contact>) => {
            state.contactList.push(action.payload)
        },
        update: (state, action: PayloadAction<Contact>) => {
            const { id, first_name, last_name, email, phone_number } = action.payload;

            state.contactList = state.contactList.map((contact) => 
            contact.id === id ? {...contact, first_name, last_name, email, phone_number}: contact);
        },
        destroy: (state, action: PayloadAction<{ id: string }>) => {
            state.contactList = state.contactList.filter((contact) => contact.id !== action.payload.id)
        }
    }
})

export const { create, update, destroy } = contactSlice.actions;

export const selectContactList = (state: RootState) => state.contact.contactList;

export default contactSlice.reducer;