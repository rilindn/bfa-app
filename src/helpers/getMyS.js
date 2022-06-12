const getMyS = ({ value, string, onlyString, withNo, suffix = 's' }) => {
  const textResult = !value
    ? !withNo
      ? string
      : `No ${string}s`
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
