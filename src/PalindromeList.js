import React from 'react'
import { connect } from 'react-redux'

const PalindromeChecker = ({ palindromes }) => {
  return (
    <div>
      <ul>
        {palindromes.map(([text, isPalindrome], i) => (
          <li key={i}>
            "{text}" | {isPalindrome ? 'is' : 'is not'}
          </li>
        ))}
      </ul>
   </div>
  )
}

const mapStateToProps = state => {
  return {
    palindromes: state.palindrome,
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PalindromeChecker)
