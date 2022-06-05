class Contact {
    id: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    constructor(id: string, first_name: string, last_name: string, phone_number: string, email: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
        this.email = email;
    }
}

export default Contact