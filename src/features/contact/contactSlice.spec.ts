import contactReducer, {
    create, update, destroy
} from "./contactSlice";
import { initialState as initState, initialStateType } from "../../initial-data/Contacts";
import { v4 as uuidv4 } from "uuid";
import Contact from "models/Contact";


describe('contact reducer', () => {
    const initialState: initialStateType = initState;

    it('should handle init state', () => {
       expect(contactReducer(undefined, { type: "unknown"})).toEqual(initialState)
    })

    let id = uuidv4()
    it('should handle creation of a contact', () => {
        const contacts = contactReducer(initialState, create({ 
            id: id,
            first_name: "Jeremy",
            last_name: "Renner", 
            phone_number: "5342324566",
            email: "hawkeye@marvel.disney.com"
        }))
        expect(contacts.contactList.length).toEqual(13);
    })

    it('should handle update of a contact', () => {
        const creation = contactReducer(initialState, create({ 
            id: id,
            first_name: "Jeremy",
            last_name: "Renner", 
            phone_number: "5342324566",
            email: "hawkeye@marvel.disney.com"
        }))
        const contacts = contactReducer(creation, update({ 
            id: id,
            first_name: "Jeremy",
            last_name: "Renner", 
            phone_number: "5342324566",
            email: "ronin@marvel.disney.com"
        }))
        expect(contacts.contactList.filter((contact) => contact.first_name === "Jeremy")[0].email).toEqual("ronin@marvel.disney.com");
    })

    it('should handle deletion of a contact', () => {
        const contacts = contactReducer(initialState, destroy({ 
            id: id,
        }))
        expect(contacts.contactList.length).toEqual(12);
    })
})