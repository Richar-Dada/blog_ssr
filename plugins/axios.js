import * as axios from 'axios'

export default ({ app }) => {
  // The server-side needs a full url to works
  if (process.server) {
    axios.defaults.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  }
}
