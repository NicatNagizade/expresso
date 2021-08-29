import { Route } from "../lib/route"

Route.group({prefix:'/api'}, function() {
    require('./api')
})
