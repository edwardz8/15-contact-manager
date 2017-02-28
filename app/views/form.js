export default class FormView {

  constructor(el, store) {
    this.el = el;
    this.store = store;
  }
  mounted() {
    // Listen for submit events...
    this.el.addEventListener('submit', (event) => {
      // Stop the browser's default behavior
      event.preventDefault();

      // Collect the form data
      const data = {
        firstName: this.el.querySelector('.first-name').value,
        lastName: this.el.querySelector('.last-name').value,
        street: this.el.querySelector('.street-name').value,
        city: this.el.querySelector('.city-name').value,
        state: this.el.querySelector('.state-name').value,
      };

      this.store.dispatch({ type: 'CONTACT@CREATE', data });
      //this.store.dispatch({ type: 'CONTACT@DELETE', data });

    });
  }
}
