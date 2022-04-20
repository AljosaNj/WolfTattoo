import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
 const [state, handleSubmit] = useForm("moqrkbyy");
  if (state.succeeded) {
      return <h4 className='backpara'>Thanks for the Message, we will contact you!</h4>;
  }

  return (
    <div className='formcont'>
     <h2 className='formtext'>Send Us a Message</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label' htmlFor="email">
       Name
      </label>
      <input
      className='input'
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />



      <label className='label' htmlFor="email">
        Email Address
      </label>
      <input
      className='input'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <label className='label' htmlFor="email">
       Message
      </label>
      <textarea
       className='textarea'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='input' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}

function FormApp() {
  return (
    <ContactForm />
  );
}


export default FormApp