import { getUser } from './authClient';
import { readForUser } from './listItemsClient';

export default async () => {
  const data = await getUser();
  if (!data) {
    return { user: null, listItems: [] };
  }
  const { user } = data;
  const { listItems } = await readForUser(user.id);
  return {
    user,
    listItems,
  };
};
