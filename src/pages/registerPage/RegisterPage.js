import React, { useState } from 'react';
import classes from './RegisterPage.module.css';

export function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        conference: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className={classes.register}>
            <div className={classes.container}>
                <div className={classes.register_inner}>
                    <div className={classes.register_form}>
                        <h2>Registration Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={classes.form_group}>
                                <label htmlFor='name'>Name:</label>
                                <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required/>
                            </div>
                            <div className={classes.form_group}>
                                <label htmlFor='email'>Email:</label>
                                <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required/>
                            </div>
                            <div className={classes.form_group}>
                                <label htmlFor='role'>Role:</label>
                                <select id='role' name='role' value={formData.role} onChange={handleChange} required>
                                    <option value="">Select your role</option>
                                    <option value="student">Student</option>
                                    <option value="professor">Professor</option>
                                    <option value="scientist">Scientist</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                            </div>
                            <div className={classes.form_group}>
                                <label htmlFor='conference'>Conference:</label>
                                <select id='conference' name='conference' value={formData.confernce} onChange={handleChange} required>
                                    <option value="">Select a conference</option>
                                    <option value="student">MEET.STUDENT</option>
                                    <option value="professor">MEET.SCIENCE</option>
                                    <option value="scientist">MEET.TALKING</option>
                                    <option value="teacher">MEET.EXPO</option>
                                    <option value="teacher">MEET.AWARDS</option>
                                </select>
                            </div>
                            <button type='submit'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}