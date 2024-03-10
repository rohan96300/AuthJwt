import bcrypt from 'bcrypt';

const users = [
    {
        name:'rohan raju',
        email: 'rohan@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name:'test user1',
        email: 'testuser1@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    },
    {
        name:'test user3',
        email: 'testuser3@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    }
];

export default users;