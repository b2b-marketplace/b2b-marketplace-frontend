export const passwordRegEx = /^(?=.*[a-zA-Z0-9])(?=.*[^\w\s]).{8,}$/;
export const phoneRegEx = /^\+?\d{10,20}$/;
export const passwordLength = 8;

export const parseErrors = (errors) => {
  const parsedErrors = {};

  const traverseErrors = (obj) => {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        parsedErrors[key] = obj[key].join(' ');
      } else if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        traverseErrors(obj[key]);
      }
    }
  };

  traverseErrors(errors);

  return parsedErrors;
};
