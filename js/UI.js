
class UI {
    static render(data) {
        if (Array.isArray(data)) {
            console.log('Data is an array!');
            const templates = data.map((contact) => UI.createTemplate(contact)).join('');
            contactList.insertAdjacentHTML('afterbegin', templates);
        } else if (typeof data == 'object') {
            console.log('Data is an object!');
            const template = UI.createTemplate(data);
            contactList.insertAdjacentHTML('afterbegin', template);
        } else {
            alert('Data must be an array or object.');
        }
    };

    static createTemplate(contact) {
        return `
            <div class="col-md-3 offset-md-1 p-4 mb-4 bg-dark text-light">
                <button data-contactid=${contact.id} class="btn btn-sm btn-danger float-right delete">&times;</button>
                <h4>${contact.name}</h4>
                <p>${contact.email}</p>
            </div>
        `;
    };

    static handleCreateContact() {
        // event.preventDefault();
        console.log('submit');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const addressInput = document.getElementById('address');

        const newContact = new Contact(
            nameInput.value,
            emailInput.value,
            phoneInput.value,
            addressInput.value,
        );

        state.contacts.push(newContact);
        UI.render(newContact);
    };

    static handleDeleteContact() {
        if (event.target.classList.contains('delete')) {
            const filteredContacts = state.contacts.filter((contact) => {
                return contact.id !== parseInt(event.target.dataset.contactid);
            });

            state.contacts = filteredContacts;

            event.target.parentNode.remove();

        }
    };

}
