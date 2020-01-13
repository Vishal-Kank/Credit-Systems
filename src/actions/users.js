import { ADD_USER, DELETE_USER, LOAD_USERS } from './types';

//Add User
export const addUser = user => dispatch => {
    const userObj = {
        id: user.id,
        name: user.name,
        age: user.age,
        address: user.address,
        contact: user.contact
    }
    console.log(userObj)
    localStorage.setItem(user.id, JSON.stringify(userObj));

    dispatch({
        type: ADD_USER
    });
};
//Load User
export const loadUsers = () => dispatch => {
    let users = [];
    let i = localStorage.length;

    while (i--) {
        if (localStorage.key(i) !== 'loaded' && localStorage.key(i) !== 'someMoney' && localStorage.key(i) !== 'showGraph' && localStorage.key(i) !== 'lastTime' && localStorage.key(i) !== 'open')
            users.push(
                JSON.parse(localStorage.getItem(localStorage.key(i)))
            );
    }

    dispatch({
        type: LOAD_USERS,
        payload: users
    })
};
//Remove User
export const removeUser = id => dispatch => {
    console.log('recived user id=>', id);
    localStorage.removeItem(id);

    let users = [];
    let i = localStorage.length;

    while (i--) {
        if (localStorage.key(i) !== 'loaded' && localStorage.key(i) !== 'someMoney' && localStorage.key(i) !== 'showGraph' && localStorage.key(i) !== 'lastTime' && localStorage.key(i) !== 'open')
            users.push(
                JSON.parse(localStorage.getItem(localStorage.key(i)))
            );
    }

    dispatch({
        type: LOAD_USERS,
        payload: users
    })
};
