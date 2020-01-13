import React, { useState } from 'react';
import uuid from 'react-uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUser } from '../actions/users';

const Registration = ({ addUser }) => {
    const [form, setform] = useState({
        id: '',
        name: '',
        age: '',
        address: '',
        contact: ''
    });
    const { name, age, address, contact } = form;

    const onChange = e => setform({
        ...form,
        id: uuid(),
        [e.target.name]: e.target.value
    });
    const onSubmit = e => {
        e.preventDefault();
        addUser(form);
    }
    return (
        <div className='container '>
            <h2 className='large text-primary'>Registration</h2>
            <form className='form my-3 form-bg' onSubmit={e => onSubmit(e)}>
                <div className='form-group d-flex p-1'>
                    <p className='lead left'>Name</p>
                    <input type='text' className=' right' name='name' value={name} onChange={e => onChange(e)} required />
                </div>
                <div className='form-group d-flex p-1'>
                    <p className='lead left'>Age</p>
                    <input type='number' className='right' name='age' value={age} onChange={e => onChange(e)} min='18' required />
                </div>
                <div className='form-group d-flex p-1'>
                    <p className='lead left'>Address</p>
                    <input type='text' className='right' name='address' value={address} onChange={e => onChange(e)} required />
                </div>
                <div className='form-group d-flex p-1'>
                    <p className='lead left'>Contact</p>
                    <input type='tel' className='right' name='contact' value={contact} onChange={e => onChange(e)} required />
                </div>
                <div className='form-group text-center p'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}
Registration.propType = {
    addUser: PropTypes.func.isRequired,
}

export default connect(null, { addUser })(Registration);