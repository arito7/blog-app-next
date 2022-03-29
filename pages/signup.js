import Layout from '../components/Layout';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from '../styles/signup.module.css';
import Link from 'next/link';
import { useState } from 'react';
const signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRpasswordChange = (e) => {
    setRpassword(e.target.value);
  };

  const onSignup = () => {
    fetch('http://localhost:5000/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({ username, password, rpassword }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <Typography variant="h1" gutterBottom>
        Sign up
      </Typography>
      <Box component="form" className={styles.form}>
        <TextField
          label="Username"
          value={username}
          onChange={onUsernameChange}
          name="username"
          required
        />
        <TextField
          type="password"
          value={password}
          onChange={onPasswordChange}
          label="Password"
          name="password"
          required
        />
        <TextField
          value={rpassword}
          onChange={onRpasswordChange}
          type="password"
          label="Repeat Password"
          name="rpassword"
          required
        />
        <Button variant="outlined" type="button" onClick={onSignup}>
          Signup
        </Button>
      </Box>
      <Typography variant="subtitle1">
        Already a member?{' '}
        <Link href="/login">
          <a className={styles.login}>Login</a>
        </Link>
      </Typography>
    </Layout>
  );
};

export default signup;
