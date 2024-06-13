export function findInputError(errors: { [x: string]: any; }, name: string) {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { errors: errors[key] });
    }, {});
    return filtered
}

export const isFormInvalid = (err: {}) => {
  if(Object.keys(err).length > 0) return true
  return false
}