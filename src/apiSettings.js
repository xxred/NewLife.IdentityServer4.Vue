const login = {
  loginByUsername: '/api/users/login',
  logout: '/api/users/logout',
  getUserInfo: '/api/users/getuserinfo'
}

export default settings => {
  settings.baseUrl = 'https://localhost:44352'
  settings.login = login
  return settings
}
