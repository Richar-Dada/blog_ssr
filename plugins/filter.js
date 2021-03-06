import Vue from 'vue'
import moment from 'moment'

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  return moment(new Date(parseInt(value) / 1000)).format(formatString)
})
