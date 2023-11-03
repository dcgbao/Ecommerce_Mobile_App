export const checkName = (value) => {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  return !format.test(value)
}

export const checkEmail = (value) => {
  const format = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  return format.test(value)
}

export const checkPassword = (value) => {
  return value.length >= 8
}

export const checkConfirmPassword = (password, confirm) => {
  return password === confirm
}