

export function findContacts(data) {
  return {type: 'CONTACT@FIND_ALL', data: data }
};

export function createContacts(data) {
  data.id = new Date();
  return {type: 'CONTACT@CREATE', data: data};
};

export function removeContacts(id) {
  return {type: 'CONTACT@REMOVE', data: id};
};
