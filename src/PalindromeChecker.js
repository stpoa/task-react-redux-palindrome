import React, { useRef } from 'react'
import { connect } from 'react-redux'

import { setPalindrome } from './actions/palindromeActions'
import { checkPalindrome } from './utils'
import { logout } from './actions/userActions'

const PalindromeChecker = ({ palindrome, setPalindrome, logout }) => {
  const palindromeInput = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const text = palindromeInput.current.value
    setPalindrome(text, checkPalindrome(text))
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
      Palindrome
      <form onSubmit={handleSubmit}>
        <label>
          Palindrome: <input type="text" ref={palindromeInput} />
        </label>
        <input type="submit" value="Check" />
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  setPalindrome,
  logout,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(PalindromeChecker)
