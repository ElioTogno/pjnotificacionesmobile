export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Correo no puede estar vacio."
  if (!re.test(email)) return 'Ooops! necesita una direccion de correo valida.'
  return ''
}
