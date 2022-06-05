import { v4 as uuidV4 } from "uuid";
import Contact from "../models/Contact";

const contactList: Contact[] = [
    {
        id: uuidV4(),
        first_name: "Liam",
        last_name: "Hemsworth",
        phone_number: "7741234323",
        email: "liamhemsworth@gmail.com"
    },
    {
        id: uuidV4(),
        first_name: "Liam",
        last_name: "Hemsworth",
        phone_number: "7741234323",
        email: "liamhemsworth@gmail.com"
    },
    {
        id: uuidV4(),
        first_name: "Liam",
        last_name: "Hemsworth",
        phone_number: "7741234323",
        email: "liamhemsworth@gmail.com"
    },
    {
        id: uuidV4(),
        first_name: "Liam",
        last_name: "Hemsworth",
        phone_number: "7741234323",
        email: "liamhemsworth@gmail.com"
    },
    {
        id: uuidV4(),
        first_name: "Liam",
        last_name: "Hemsworth",
        phone_number: "7741234323",
        email: "liamhemsworth@gmail.com"
    },
    {
        id: uuidV4(),
        first_name: "Liam",
        last_name: "Hemsworth",
        phone_number: "7741234323",
        email: "liamhemsworth@gmail.com"
    },
    {
        id: uuidV4(),
        first_name: "Liam",
        last_name: "Hemsworth",
        phone_number: "7741234323",
        email: "liamhemsworth@gmail.com"
    },
    {
        id: uuidV4(),
        first_name: "Liam",
        last_name: "Hemsworth",
        phone_number: "7741234323",
        email: "liamhemsworth@gmail.com"
    },
]

export type initialStateType = {
    contactList: Contact[],
}

export const initialState: initialStateType = {
    contactList
}

