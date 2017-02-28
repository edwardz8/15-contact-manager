

export function findContacts(data) {
  return {
    type: 'CONTACT@FIND_ALL',
    contacts: {id}
  };
}

export function createContacts(contacts) {
    contact.id = new Date();
  return {
    type: 'CONTACT@CREATE',
    contacts: {data.contacts}
  };
}

export function removeContacts(id) {
  return { type: 'CONTACT@REMOVE', id,};
};
