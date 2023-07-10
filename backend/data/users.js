import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Jenny Rajak',
        email: 'jenny@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
    {
        name: 'Jeshmi Rajak',
        email: 'jeshmi@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },

];

export default users;