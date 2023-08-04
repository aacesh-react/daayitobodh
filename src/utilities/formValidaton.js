export const validateForm = (formData, setValidationError) => {
  let hasEmptyData = false;
  for (const name in formData) {
    if (Object.hasOwnProperty.call(formData, name)) {
      const value = formData[name];
      value
        ? setValidationError((prev) => ({ ...prev, [name]: false }))
        : setValidationError((prev) => ({ ...prev, [name]: true }));
      if (!value || value.length == 0) {
        hasEmptyData = true;
      }
    }
  }
  return hasEmptyData;
};
