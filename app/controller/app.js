import FormView from '../views/form'
import ListView from '../views/list'
export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.formView = new FormView(this.el.querySelector('.formform'), this.store)
    this.listView = new ListView(this.el.querySelector('.grid'), this.store)
  }

  created() {
    // Listen for changes in the store and save them in local storage
    this.store.subscribe(() => {
      // Save the list of snacks as a JSON String in localstorage
      const contacts = this.store.getState().contacts;
      window.localStorage.snacks = JSON.stringify(contacts);
    });

    // "mount" (Start up) views
    this.formView.mounted();
    this.listView.mounted();

    // Get the stringified list of snacks or a default of an empty array
    const dataString = window.localStorage.contacts || '[]';
    // Dispatch FIND_ALL to the store with the data loaded from localstorage
    this.store.dispatch({ type: 'CONTACT@FIND_ALL', data: JSON.parse(dataString) });
  }
}
