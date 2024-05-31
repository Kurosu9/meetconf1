import React, { useState } from 'react';
import classes from './RegisterPage.module.css';

export function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        conferences: [],
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                conferences: checked
                    ? [...prevState.conferences, value]
                    : prevState.conferences.filter(conf => conf !== value)
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
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
                            <div className={classes.form_group2}>
                                <label htmlFor='conference' className={classes.conf}>Conferences:</label>
                                <div className={classes.checkbox_groups}>
                                    <div className={classes.checkbox_group1}>
                                        <div className={classes.check}>
                                            <label>MEET.STUDENT</label>
                                            <input type="checkbox" name="conference" value="MEET.STUDENT" onChange={handleChange} checked={formData.conferences.includes("MEET.STUDENT")} />
                                        </div>
                                        <div className={classes.check}>
                                            <label>MEET.SCIENCE</label>
                                            <input type="checkbox" name="conference" value="MEET.SCIENCE" onChange={handleChange} checked={formData.conferences.includes("MEET.SCIENCE")} />
                                        </div>
                                        <div className={classes.check}>
                                            <label>MEET.TALKING</label> 
                                            <input type="checkbox" name="conference" value="MEET.TALKING" onChange={handleChange} checked={formData.conferences.includes("MEET.TALKING")} />
                                        </div>
                                    </div>
                                    <div className={classes.checkbox_group2}>
                                        <div className={classes.check}>
                                            <label>MEET.EXPO</label>
                                            <input type="checkbox" name="conference" value="MEET.EXPO" onChange={handleChange} checked={formData.conferences.includes("MEET.EXPO")} />
                                        </div>
                                        <div className={classes.check}>
                                            <label>MEET.AWARDS</label>
                                            <input type="checkbox" name="conference" value="MEET.AWARDS" onChange={handleChange} checked={formData.conferences.includes("MEET.AWARDS")} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type='submit'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}