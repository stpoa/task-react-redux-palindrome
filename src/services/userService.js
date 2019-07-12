const url = 'https://demo1461243.mockable.io/users'

// You should send your username and password to backend,
// you shouldn't have access to passwords or event hashes.
// This is checked on client side because of task requirement.
export const login = async ({ username, password }) => {
  const user = await window
    .fetch(url)
    .then(res => res.json())
    .then(users => {
      return users
    })
    .then(users =>
      users.find(
        user => user.username === username && user.password === password,
      ),
    )

  if (user) storeUser(user)

  return user
}

const storeUser = user =>
  localStorage.setItem(
    'user',
    JSON.stringify({ username: user.username, isLoggedIn: true }),
  )
