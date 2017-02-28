//import {removeContacts} from '../actions';

class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('li');
    this.el.classList.add('grid__item');
    this.el.innerHTML = `
      <div class="profile">
        <div class="profile-top">
          <h4 class="name"></h4>
          <p class="address"></p>
          <p class="address__line-two"></p>
        </div>
      </div>
      <button class="delete">Delete</button>`;
  }

  mounted() {
    this.el.addEventListener('click', () => {
      this.store.dispatch(removeContacts(this.contacts.id));
    });
  }

  render() {
    this.el.querySelector('.name').innerText = `${this.data.firstName} ${this.data.lastName}`;
    this.el.querySelector('.address').innerText = this.data.street;
    this.el.querySelector('.address__line-two').innerText = `${this.data.city} ${this.data.state}`;


  }
}

export default class ListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    // Listen for the snacks list to change...
    this.store.subscribe(() => {
      // Re-Render
      this.render();
    });
  }

  // How do we translate data into UI?
  render() {
    // Clear the grid
    this.el.innerHTML = '';
    const contacts = this.store.getState().contacts;

    // Loop through contacts array
    contacts.forEach((contact) => {
      // Create a new item view...
      const view = new ItemView(contact, this.store);
      view.mounted();
      view.render();

      // Add the view's element into the list element
      this.el.appendChild(view.el);
    });
  }
}
