import { storePalindrome } from '../services/palindromeService'

export const setPalindrome = (palindrome, isPalindrome) => dispatch => {
  dispatch({ type: 'SET_PALINDROME', payload: [palindrome, isPalindrome] })
  storePalindrome([ palindrome, isPalindrome ])
}
