export const checkPalindrome = s => {
  const len = Math.floor(s.length / 2)

  const start = s.slice(0, s.length - len)
  const end = s.slice(len).split('').reverse('').join('')

  return start === end
}
