const parseTime = (format: string) => {
  if (!format) return null;
  const timestamp = Date.parse(format);
  const date = new Date(timestamp);

  return `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export default parseTime;
