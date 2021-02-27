const fs = require('fs');
const path = require('path')
const usersJson =path.join('data','users.json');


module.exports = {
    getUser : ()=> 
        JSON.parse(fs.readFileSync(usersJson, "utf-8")),
    setUser : (user)=> {
        fs.writeFileSync(usersJson, JSON.stringify(user, null, 2), 'utf-8')
    }
}
