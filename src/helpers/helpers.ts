export const generateUserData = (tgUser) => {
  return {
    id: tgUser.id,
    firstName: tgUser.first_name,
    lastName: tgUser.last_name,
    friends: [],
    points: 0,
  };
};
