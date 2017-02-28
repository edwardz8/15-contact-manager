

export function findContacts(name, data) {
  return {
    type: 'CONTACTS@FIND_ALL',
    contacts: { name, data, id: new Date() }
  };
}

export function createContacts(name, data) {
  return {
    type: 'CONTACTS@CREATE',
    contacts: { name, data, id: new Date() }
  };
}

export function removeContacts(id) {
  return {
    type: 'CONTACTS@REMOVE',
    contacts: {}
  };
}

// export function () {
//  if ( === ) {
//    return { type: 'SHOW_GRID@TOGGLE' };
//  }
//
//  return { type: 'SHOW_GRID@TOGGLE', force };
// }
