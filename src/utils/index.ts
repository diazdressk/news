export const extendDigits = (num: number): string => {
  if (num >= 0 && num < 10) {
    return '0' + num;
  } else {
    return '' + num;
  }
};

export const formatDate = (date: number): string => {
  const dateVal = new Date(date);
  return `${dateVal.toLocaleDateString()}, ${extendDigits(dateVal.getHours())}:${extendDigits(
    dateVal.getMinutes(),
  )}`;
};

export const hoursMinutesAgo = (date: number): string => {
  const currentDate = new Date();
  const diff = Math.floor((currentDate.getTime() - date) / 1000);
  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff % 3600) / 60);

  if (hours > 0) {
    const hoursString = hours === 1 ? "1 hour" : `${hours} hours`;
    if (minutes > 0) {
      const minutesString = minutes === 1 ? "1 minute" : `${minutes} minutes`;
      return `${hoursString} ${minutesString} ago`;
    } else {
      return `${hoursString} ago`;
    }
  } else {
    const minutesString = minutes === 1 ? "1 minute" : `${minutes} minutes`;
    return `${minutesString} ago`;
  }
};

