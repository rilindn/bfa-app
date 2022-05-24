const getMyS = (value, string, onlyString, suffix = 's') => {
  const textResult = !value
    ? string
    : value > 1
    ? onlyString
      ? string + suffix
      : `${value} ${string + suffix}`
    : onlyString
    ? string
    : `${value} ${string}`;
  return textResult;
};

export default getMyS;
