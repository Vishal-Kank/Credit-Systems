import React, { useEffect } from 'react';
import { loadUsers, removeUser } from '../actions/users';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Users = ({ loadUsers, removeUser, users: { loading, users } }) => {
    useEffect(() => {
        loadUsers()
    }, [loading, loadUsers]);
    return (
        <div className='container'>
            <h2 className='large my-3 text-primary'>Users</h2>
            <ul >
                {
                    loading || !users.length ?
                        <div className=''>
                            <p className='lead'>Users not found.....</p>
                        </div>
                        :
                        users.map(user =>

                            <li className='d-flex users' key={user.id}>
                                <div className='lead'><h3>{user.name}</h3></div>
                                <div className='lead'><p>{user.address}</p></div>
                                <div className='lead'><p>{user.contact}</p></div>
                                <div className='lead'><button className='btn btn-danger' onClick={() => { removeUser(user.id) }}>Delete</button></div>
                            </li>
                        )
                }
            </ul>
        </div>
    )
}

Users.propTypes = {
    loadUsers: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    users: state.users
});
export default connect(mapStateToProps, { loadUsers, removeUser })(Users);