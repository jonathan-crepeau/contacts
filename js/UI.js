class UI {
    static render(data, domElement) {
      if (Array.isArray(data)) {
        // console.log('Data is an Array');
        const templates = data.map((contact) => UI.createTemplate(contact)).join('');
        domElement.insertAdjacentHTML('afterbegin', templates);
      } else if (typeof data === 'object') {
        console.log('Data is an Object');
        const template = UI.createTemplate(data);
        domElement.insertAdjacentHTML('afterbegin', template);
      } else {
        alert('Data must be an array or object.');
      }
    }
  
    static createTemplate(contact) {
      return `
        <div class="col-md-3 offset-md-1 p-4 mb-4 bg-dark text-light">
          <button data-contactid=${contact.id} class="btn btn-sm btn-danger float-right delete">&times;</button>
          <h4>${contact.name}</h4>
          <p>${contact.email}</p>
        </div>
      `;
    }
  
    static handleCreateContact(event, domElement) {
      event.preventDefault();
      // console.log('Submit');
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
      UI.render(newContact, domElement);
    }
  
    static handleDeleteContact(event, state) {
      if (event.target.classList.contains('delete')) {
        const filteredContacts = state.contacts.filter((contact) => {
          return contact.id !== parseInt(event.target.dataset.contactid);
        });
    
        state.contacts = filteredContacts;
    
        UI.animateCSS(event.target.parentNode, 'hinge', () => {
          event.target.parentNode.remove();
        });
      }
    }
  
    static animateCSS(element, className, callBack) {
      element.classList.add('animated', className);
    
      function handleAnimationEnd() {
        element.classList.remove('animated', className);
        element.removeEventListener('animationend', handleAnimationEnd);
    
        if (typeof callBack === 'function') callBack();
      }
    
      element.addEventListener('animationend', handleAnimationEnd);
    };
  }