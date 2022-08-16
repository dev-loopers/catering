const bcrypt = require('bcryptjs');

usersdata = [
    {name:"adminuser",contact:8956235623,email:"admin@gmail.com",username:"admin",password:bcrypt.hashSync("admin",10),role:"admin_role"},
    {name:"user1",contact:8956235623,email:"user1@gmail.com",username:"user1",password:bcrypt.hashSync("123456",10)},
    {name:"user2",contact:8956235623,email:"user2@gmail.com",username:"user2",password:bcrypt.hashSync("123456",10)},
    {name:"user3",contact:8956235623,email:"user3@gmail.com",username:"user3",password:bcrypt.hashSync("123456",10)},
    {name:"user4",contact:8956235623,email:"user4@gmail.com",username:"user4",password:bcrypt.hashSync("123456",10)},
    {name:"user5",contact:8956235623,email:"user5@gmail.com",username:"user5",password:bcrypt.hashSync("123456",10)},
]


module.exports = usersdata;