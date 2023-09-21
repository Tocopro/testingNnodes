import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) =>
{
    res.send(users);
}

export const createUser = (req, res) =>
{
    const user = req.body;    
    
    users.push ({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database! `);

}

export const getUserbyId = (req, res) =>
{
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}


export const deleteUserbyId = (req, res) =>
{
    const { id } = req.params;

    users = users.filter((user) => user.id != id );

    res.send(`User with the id ${id} is deleted from the database.`);
}

export const patchbyId = (req, res) =>
{
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const userUpdated = users.find((user) => user.id == id);
    if(firstName)userUpdated.firstName = firstName;    
    if(lastName)userUpdated.lastName = lastName;
    if(age)userUpdated.age = age;
    res.send(`User with the id ${id} has been updated`);
}