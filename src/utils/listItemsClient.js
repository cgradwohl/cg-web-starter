import client from './apiClient';

const create = listItemData => client('list-item', { body: listItemData });

const read = (listItemIds) => {
  if (!listItemIds.length) {
    return Promise.resolve({});
  }
  return client(
    `list-item?listItemIds=${encodeURIComponent(listItemIds.join(','))}`,
  );
};

const update = (listItemId, updates) => client(`list-item/${listItemId}`, {
  method: 'PUT',
  body: updates,
});

const readForUser = ownerId => client(`list-item?ownerId=${encodeURIComponent(ownerId)}`);

const remove = listItemId => client(`list-item/${listItemId}`, { method: 'DELETE' });

export {
  create,
  read,
  remove,
  readForUser,
  update,
};
