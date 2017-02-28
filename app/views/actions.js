

export function findContacts(name, data) {
  return {
    type: 'CONTACT@FIND_ALL',
    contacts: { name, data, id: new Date() }
  };
}

export function createContacts(name, data) {
  return {
    type: 'CONTACT@CREATE',
    contacts: { name, data, id: new Date() }
  };
}

export function removeContacts(id) {
  return {
    type: 'CONTACT@REMOVE',
    id,
  };
}

// export function () {
//  if ( === ) {
//    return { type: 'SHOW_GRID@TOGGLE' };
//  }
//
//  return { type: 'SHOW_GRID@TOGGLE', force };
// }
