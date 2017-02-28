import reducer from '../app/reducer';

module('reducer', () => {
 test('default state', (assert) => {
   assert.deepEqual(reducer(null, {}), { contacts: [] }, 'default state');
 });

 test('load all contacts', (assert) => {
   const emptyState = { contacts: [] };
   const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
   const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
   assert.deepEqual(reducer(emptyState, actionOne), { contacts: actionOne.data });
 });

 test('add a contact', (assert) => {
   const emptyState = { contacts: [] };
   const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
   const actionOne = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
   const actionTwo = { type: 'CONTACT@CREATE', data: { firstName: 'Angelina', lastName: 'Jolie' } };
   assert.deepEqual(reducer(emptyState, actionOne), { contacts: [actionOne.data] });
   assert.deepEqual(reducer(oldState, actionOne), { contacts: [actionOne.data, actionTwo.data] });
 });
});

test('remove a contact', (assert) => {
  const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1, }, { firstName: 'Ron', lastName: 'Swanson', id: 2, }] };
  const action = { type: 'CONTACT@REMOVE', id: 1};
  const expected = { contacts: [] };
  assert.deepEqual(reducer(oldState, action), expected);
  });

  test('remove a contact with two items', (assert) => {
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1, }, { firstName: 'Ron', lastName: 'Swanson', id: 2, }] };
    const action = { type: 'CONTACT@REMOVE', id: 1};
    const expected = { contacts: [{ firstName: 'Ron', lastName: 'Swanson', id: 2, }] };
    assert.deepEqual(reducer(oldState, action), {...oldState, contacts: [id: 1, id: 2] });
    });
