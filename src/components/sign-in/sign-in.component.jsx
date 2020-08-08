import React, { useState } from 'react';
import './sigin-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../utils/firebase.utils';
const SignIn = () => {
  const [signInText, setSignInText] = useState({ email: '', password: '' });
  const handleChange = (input) => {
    setSignInText({ ...signInText, ...input });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = signInText;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSignInText({ email: '', password: '' });
    } catch (error) {
      console.log('login error', error);
    }
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>if you have account</h2>
      <span>sign in with yout email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          type='email'
          maxLength={40}
          handleChange={handleChange}
          value={signInText.email}
        />
        <FormInput
          label='password'
          type='password'
          maxLength={15}
          handleChange={handleChange}
          value={signInText.password}
        />
        <div className='buttons-wrapper'>
          <CustomButton type='submit'> sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
