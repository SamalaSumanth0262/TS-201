import {User} from './models/User'

const user = new User({name: 'suamnth', age: 20})

console.log(user.get('age'))

user.set({name: 'asdad'})

console.log(user.get('age'))
