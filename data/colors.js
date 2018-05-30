const colors = {
  yellow: '#FFC31A',
  green: '#32B368',
  green10l: '#4CCD82',
  blue: '#4B9AEC',
  blue10l: '#438cee',
  red: '#FD7274',
  red10l: '#FF7171',
  gray: '#828282',
  lightGray: '#d9d9d9'
};

exports.lighten10l = color => {
  const obj = {};
  obj[colors.blue] = colors.blue10l;
  obj[colors.red] = colors.red10l;
  obj[colors.green] = colors.green10l;
  return obj[color];
};

exports.colors = colors;
