const isInt = (value: any): boolean => {
  if (value == "") return false;
  return value == parseInt(value, 10) ? true : false;

}

const isNumber = (value: any): boolean => {
  return isNaN(parseFloat(value)) ? true : false;
}

export { isInt, isNumber }
