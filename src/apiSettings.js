const login = {
  loginByUsername: '/api/users/login',
  logout: '/api/users/logout',
  getUserInfo: '/api/users/getuserinfo'
}

const route = {
  getRoutes: '/api/routes'
}

export default settings => {
  settings.baseUrl = 'https://localhost:44352'
  settings.login = login
  settings.route = route
  return settings
}
