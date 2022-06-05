import { v4 as uuidV4 } from "uuid";
import Contact from "../models/Contact";

const contactList: Contact[] = [
    {
        id: uuidV4(),
        first_name: "Samuel",
        last_name: "Jackson",
        phone_number: "7334332323",
        email: "samljackson@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Robert",
        last_name: "Downey",
        phone_number: "2343224323",
        email: "rdj@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Paul",
        last_name: "Bettany",
        phone_number: "4521234434",
        email: "vision@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Scarlett",
        last_name: "Johansson",
        phone_number: "4335631353",
        email: "blackwidow@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Don",
        last_name: "Cheadle",
        phone_number: "3432234323",
        email: "warmachine@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Jon",
        last_name: "Favreau",
        phone_number: "4821342455",
        email: "hogan@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Chris",
        last_name: "Evans",
        phone_number: "6346774442",
        email: "captamerica@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Chris",
        last_name: "Hemsworth",
        phone_number: "9345525543",
        email: "thor@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Tom",
        last_name: "Hiddleston",
        phone_number: "5683336754",
        email: "loki@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Hayley",
        last_name: "Atwell",
        phone_number: "5423546754",
        email: "captcarter@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Benedict",
        last_name: "Cumberbatch",
        phone_number: "2345336754",
        email: "drstrange@marvel.disney.com"
    },
    {
        id: uuidV4(),
        first_name: "Tom",
        last_name: "Holland",
        phone_number: "1234343254",
        email: "spiderman@marvel.disney.com"
    },
]

export type initialStateType = {
    contactList: Contact[],
}

export const initialState: initialStateType = {
    contactList
}

