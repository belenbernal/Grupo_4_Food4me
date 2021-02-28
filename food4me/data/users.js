const fs = require('fs');
<<<<<<< HEAD
const path = require('path');

const users_db = path.join('data','users.json');
module.exports = {
    getUsers: ()=> JSON.parse(fs.readFileSync(__dirname + "/users.json", "utf-8")),
    setUsers: (data) => {
        fs.writeFileSync(
            users_db,            
            JSON.stringify(data, null, 2),"utf-8");
    },
};
=======
const path = require('path')
const usersJson =path.join('data','users.json');


module.exports = {
    getUser : ()=> 
        JSON.parse(fs.readFileSync(usersJson, "utf-8")),
    setUser : (user)=> {
        fs.writeFileSync(usersJson, JSON.stringify(user, null, 2), 'utf-8')
    }
}
>>>>>>> tavo
