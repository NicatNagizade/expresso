import moment from 'moment'

const time = {
    now() {
        return moment(moment.now()) 
    },
    currentTime() {
        return time.now().format('YYYY-MM-DD H:mm:ss')
    }
}

export default time