const currentTimeStamp = new Date().getTime();

export const convertDate = (date) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = currentTimeStamp - date;

  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(elapsed / msPerMinute);
  const hours = Math.floor(elapsed / msPerHour);
  const days = Math.floor(elapsed / msPerDay);
  const months = Math.floor(elapsed / msPerMonth);
  const years = Math.floor(elapsed / msPerYear);

  if (elapsed < msPerMinute) {
    return `${seconds} seconds ago`;
  } else if (elapsed < msPerHour) {
    return `${minutes} minutes ago"`;
  } else if (elapsed < msPerDay) {
    return `${hours} hours ago`;
  } else if (elapsed < msPerMonth) {
    return `${days} days ago`;
  } else if (elapsed < msPerYear) {
    return `${months} months ago`;
  } else {
    return `${years} years ago`;
  }
};

export const formatNumber = (n) => {
  if (n < 1e3) {
    return n;
  }
  if (n >= 1e3) {
    return `${+(n / 1e3).toFixed(1)}k`;
  }
};

export const isImageURL = (url) => {
  return url.match(/\.(jpeg|jpg|gif|png|tiff|bmp)$/) !== null;
};
