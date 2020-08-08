import React, { useState } from 'react';
import './sign-up.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../utils/firebase.utils';

const SignUp = () => {
  const [signUpText, setSignUpText] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const handleChange = (input) => {
    setSignUpText({ ...signUpText, ...input });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, passwordConfirm } = signUpText;

    if (password !== passwordConfirm) {
      alert("passwords don't match");
      return;
    }
    // can add more validation function : email, password etc...!

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      setSignUpText({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>new here?</h2>
      <span>sign up with yout email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='displayName'
          type='text'
          handleChange={handleChange}
          value={signUpText.displayName}
        />
        <FormInput
          label='email'
          type='email'
          maxLength={40}
          handleChange={handleChange}
          value={signUpText.email}
        />
        <FormInput
          label='password'
          type='password'
          maxLength={15}
          handleChange={handleChange}
          value={signUpText.password}
        />
        <FormInput
          label='passwordConfirm'
          type='password'
          maxLength={15}
          handleChange={handleChange}
          value={signUpText.passwordConfirm}
        />
        <div className='button-wrapper'>
          <CustomButton type='submit'> sign up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
