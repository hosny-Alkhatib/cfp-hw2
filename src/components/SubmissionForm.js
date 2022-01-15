import React from 'react';

const SubmissionForm = () => {
  return (
    <div>
      <form>
        <div>
          <label for='email'>Email address</label>
          <input
            type='email'
            aria-describedby='emailHelp'
            placeholder='example@gmail.com'
            tabIndex='3'
            name='email'
            id='email'
          />
        </div>
        <br />
        <div>
          <label>Message</label>
          <textarea placeholder='Start typing...' rows='5'></textarea>
        </div>
        <br />
        <button type='submit' className='btn'>
          Send
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;
