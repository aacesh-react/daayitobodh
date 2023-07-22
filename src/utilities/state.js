export const updateState = (array, data) => {
  return array.map((value) => {
    if (value.id == data.id) {
      value = { ...value, ...data };
    }
    return value;
  });
};
