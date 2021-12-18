export const validateEmail = (text: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};
