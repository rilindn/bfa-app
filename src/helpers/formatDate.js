import moment from 'moment';

const formatDate = (date) => {
  const today = moment().startOf('day');
  const createdDate = moment(date, 'YYYY-MM-DD').startOf('day');
  const diff = today.diff(createdDate, 'days');

  if (diff < 5) {
    return moment(date).fromNow();
  } else {
    return moment(date).format('DD MMM YYYY [at] HH:mm');
  }
};

export default formatDate;
