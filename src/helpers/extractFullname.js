const getFullName = (user) => {
  const fullName =
    user.role === 'Player'
      ? `${user.Player?.firstName} ${user.Player?.lastName}`
      : user.Club?.clubName;
  return fullName;
};

export default getFullName;
