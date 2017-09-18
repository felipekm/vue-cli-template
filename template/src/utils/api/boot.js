import axios from 'axios'

// Overwrite
JSON.stringifySafe = (json) => {
  try {
    return JSON.stringify(json)
  } catch (error) {
    return ''
  }
}

export default {
  firstTime: true,
  appName: '{{ name }}',

  /**
  * @function configureAxios
  * @param  {String} token       {}
  * @param  {String} environment {}
  * @return {Void}
  */
  configureAxios() {
    {{#plingtoken}}
    const
      token = localStorage.getItem('PLING-TOKEN'){{/plingtoken}}

    axios.defaults.baseURL = process.env.API_KEY{{#plingtoken}}
    axios.defaults.headers.common['Authorization'] = token

    if (!token)
      this.redirectToLogin(){{/plingtoken}}

    this.saveCredentials()

    axios.interceptors.response.use({{#plingtoken}}error => {
      error.response = error.response || {}
      error.response.data = error.response.data || {}

      if (error.response.status === 401 && error.response.statusText === 'Unauthorized' || error.response.data.statusCode === 401 && error.response.data.error === 'Unauthorized')
        return this.redirectToLogin()

      return Promise.reject(error)
    }){{/plingtoken}}
  },{{#plingtoken}}
  /**
  * @function redirectToLogin
  * @return {Promise} { await }
  */
  redirectToLogin() {
    axios.get(`accounts/products/Login/${process.env.NODE_ENV}`)
      .then((urlData) => {
        const
          url = urlData.data.callbackUrl + '?callbackurl=' + window.location.href

        if (urlData.data.callbackUrl)
          window.location.href = url
      })
      .catch(console.error)
  },{{/plingtoken}}

  /**
  * @function saveCredentials
  * @param  {String} appName   { current app name }
  * @return {Promise} { await }
  */
  async saveCredentials() {
    let
      credentialData = await axios.get(`accounts/me?appmodule=${this.appName}&environment=${process.env.NODE_ENV}`)

    credentialData = credentialData.data

    localStorage.setItem('PLING-APPS', JSON.stringifySafe(credentialData.profilesProducts))
    localStorage.setItem('PLING-CUSTOMER-CONFIG', JSON.stringifySafe(credentialData.customerConfig))
    localStorage.setItem('PLING-CURRENT-VIEW-PREFERENCES', JSON.stringifySafe(credentialData.viewPreferences))
    localStorage.setItem('PLING-USER', JSON.stringifySafe(credentialData))
  }
}
