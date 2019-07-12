export const storePalindrome = palindrome =>
  localStorage.setItem(
    'palindromes',
   JSON.stringify([palindrome, ...loadPalindromes()]),
  )

export const loadPalindromes = () =>
  JSON.parse(localStorage.getItem('palindromes')) || []
