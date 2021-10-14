import React, { useState } from 'react'
import './Contact.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';



const Contact = () => {

    const [ successMessage, setSuccessMessage ] = useState('');

    const { register, handleSubmit, errors } = useForm();

    const serviceID = 'service_g7anjhc';
    const templateID = 'template_ps1t2vf';
    const userId = 'user_ci3NjONbOBIkNHeeMrsOc';

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userId
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userId) => {
    
        emailjs.send(serviceID, templateID, variables, userId)
          .then(() => {
              setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          })
          .catch(err => console.error(`Something went wrong ${err}`));
      };

    return (
        <div id='contact' className='contact'>
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form and describe your project needs, then click "Contact Me" and I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* Name Input */}
                            <input
                                id='name'
                                type='text'
                                className='form-control'
                                placeholder='Name'
                                name='name'
                                ref={
                                    register({
                                        required: 'Please enter your name',
                                        maxLength: {
                                            value: 20,
                                            message: 'Please enter a name with less than 20 characters.'
                                        }
                                    })
                                }
                            />
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* Phone Input */}
                            <input
                                id='phone'
                                type='text'
                                className='form-control'
                                placeholder='Phone Number'
                                name='phone'
                                ref={
                                    register({
                                        required: 'Please enter your phone number',
                                    })
                                }
                            />
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/* Email Input */}
                            <input
                                id='email'
                                type='email'
                                className='form-control'
                                placeholder='Email'
                                name='email'
                                ref={
                                    register({
                                        required: 'Please enter your email',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'invaild Email'
                                        }
                                    })
                                }
                            />
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* Subject Input */}
                            <input
                                id='subject'
                                type='text'
                                className='form-control'
                                placeholder='Subject'
                                name='subject'
                                ref={
                                    register({
                                        required: 'OOPS, you forgot to add the subject',
                                    })
                                }
                            />
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* Description */}
                            <textarea
                                id='descripton'
                                type='text'
                                className='form-control'
                                placeholder='Project info'
                                name='description'
                                ref={
                                    register({
                                        required: 'Please describe your project needs',
                                    })
                                }
                            />
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                        </div>
                        <button className="btn-main-offer contact-btn col-12" type='submit'>Contact Me</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
