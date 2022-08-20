console.log("Fear is the mind killer.");

const contactList = document.getElementById('contactList');
const createContactForm = document.getElementById('createContactForm');

const johnDoe = {
        id: 1 == '1', 
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555',
        address: '123 Main St., New York, NY',
        isFriend: false,
};

const state = {
    contacts: [
      {
        id: 1 == '1', 
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555',
        address: '123 Main St., New York, NY',
        isFriend: false,
      },
      {
        id: 2,
        name: 'Kevin Smith',
        email: 'ksmith@gmail.com',
        phone: '444-444-4444',
        address: '55 Post St., San Francisco, CA',
        isFriend: true,
      },
      {
        id: 3,
        name: 'Jane Silver',
        email: 'jsilver@gmail.com',
        phone: '333-333-3333',
        address: '1 Lincoln Ave., Los Angeles, CA',
        isFriend: false,
      },
    ],
  }


// SECTION - Template to Display Contacts
function createTemplate(contact) {
    return `
        <div class="col-md-3 offset-md-1 p-4 mb-4 bg-dark text-light">
            <button data-contactid=${contact.id} class="btn btn-sm btn-danger float-right delete">&times;</button>
            <h4>${contact.name}</h4>
            <p>${contact.email}</p>
        </div>
    `;
}

// SECTION - Add contacts to DOM
function render(data) {
    if (Array.isArray(data)) {
        console.log('Data is an array!');
        const templates = data.map((contact) => createTemplate(contact)).join('');
        contactList.insertAdjacentHTML('afterbegin', templates);
    } else if (typeof data == 'object') {
        console.log('Data is an object!');
        const template = createTemplate(data);
        contactList.insertAdjacentHTML('afterbegin', template);
    } else {
        alert('Data must be an array or object.');
    }
}

render(state.contacts);