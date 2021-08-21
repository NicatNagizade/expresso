const moment = require('moment')

const time = {
    now() {
        return moment(moment.now()) 
    },
    currentTime() {
        return time.now().format('YYYY-MM-DD H:mm:ss')
    }
}

module.exports = time