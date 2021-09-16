import React from 'react'
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* Name Input */}
                        <input
                            id='name'
                            type='text'
                            className='form-control'
                            placeholder='Name'
                            name='name'
                        />
                        {/* Phone Input */}
                        <input
                            id='phone'
                            type='text'
                            className='form-control'
                            placeholder='Phone Number'
                            name='phone'
                        />
                        {/* Email Input */}
                        <input
                            id='email'
                            type='email'
                            className='form-control'
                            placeholder='Email'
                            name='email'
                        />
                        {/* Subject Input */}
                        <input
                            id='subject'
                            type='text'
                            className='form-control'
                            placeholder='Subject'
                            name='subject'
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Description */}
                        <textarea
                            id='descripton'
                            type='text'
                            className='form-control'
                            placeholder='Project info'
                            name='email'
                        />
                    </div>
                    <button className="btn-main-offer contact-btn col-12" type='submit'>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
