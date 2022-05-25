import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


const MesForm = () => {
const [state, handleSubmit] = useForm("moqrkbyy");
  if (state.succeeded) {
      return <h4 className='backpara'>Thanks for the Message, we will contact you!</h4>;
  }



  return (
    
<div className='formcont'>
     
      <form className='form' onSubmit={handleSubmit}>
        <label className='label' htmlFor="email">
      
      </label>
      <input
      className='input'
        id="name"
        type="name" 
        name="name"
        placeholder='name'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />



      <label className='label' htmlFor="email">
       
      </label>
      <input
      className='input'
        id="email"
        type="email" 
        name="email"
        placeholder='email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <label className='label' htmlFor="email">
       
      </label>
      <textarea
       className='textarea'
        id="message"
        name="message"
        placeholder='message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='button' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>




    </div>
  )
}

function FormApp() {
  return (
    <MesForm/>
  );
}


export default FormApp