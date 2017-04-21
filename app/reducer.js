export default function reducer(state, action) {
  switch (action.type) {
    // CREATE: Add a new snack
    case 'CONTACT@CREATE':
      return { contacts: [action.data, ...state.contacts] };
    // READ: Loading all snacks
    case 'CONTACT@FIND_ALL':
      return { contacts: action.data };
      // DELETE: Deleting a contact
    case 'CONTACT@REMOVE':
      return { contacts: state.contacts.filter((x) => x.id !== action.data) };

    default:
      return state || { contacts: []};
  }
}
