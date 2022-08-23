class Contact {
    constructor(name, email, phone, address, isFriend) {
        this.id = new Date().getTime();
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.isFriend = isFriend;
    }
}