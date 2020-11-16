import { useForm } from 'react-hook-form';
import RedirectAuth from '../WithAuth/RedirectAuth';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  const formSubmit = async (data) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(data);
      const res = await axios.post('/api/users/login', body, config);
      localStorage.setItem('token', res.data.token);
      props.updateToken(res.data.token);
      props.history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='formWrapper'>
      <form className='form' onSubmit={handleSubmit(formSubmit)}>
        <div style={{ border: 'none' }} className='formItem'>
          <p className='titleForm'>Login</p>
        </div>
        <div className='formItemWrapper'>
          <div className={errors.email ? 'formItem formWarning' : 'formItem'}>
            <i
              className={
                errors.email ? 'fas fa-envelope warning' : 'fas fa-envelope'
              }
            ></i>
            <input
              ref={register({
                required: 'email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              type='text'
              name='email'
              placeholder='email'
              className={errors.email && 'warning'}
            />
          </div>
          <p className='errorMessage'>{errors.email && errors.email.message}</p>
        </div>

        <div className='formItemWrapper'>
          <div
            className={errors.password ? 'formItem formWarning' : 'formItem'}
          >
            <i
              className={
                errors.password ? 'fas fa-lock warning' : 'fas fa-lock'
              }
            ></i>
            <input
              ref={register({
                required: 'password is required',
                minLength: {
                  value: 6,
                  message: 'minimum 6 charector',
                },
              })}
              type='password'
              name='password'
              placeholder='password'
              className={errors.password && 'warning'}
            />
          </div>
          <p className='errorMessage'>
            {errors.password && errors.password.message}
          </p>
        </div>
        <input className='formButton' type='submit' value='Login' />
      </form>
    </div>
  );
}

export default withRouter(RedirectAuth(Login));
