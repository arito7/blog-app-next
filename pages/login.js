import Layout from '../components/Layout';
import { Box, Button, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/signup.module.css';
import { useState } from 'react';
import { login, logout, isAuth } from '../utils';
import { postPost } from './api/auth';
import { saveAuthData } from './api/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onLogin = (e) => {
    fetch('http://localhost:5000/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 403) {
          setErr(403);
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const authData = {
          expiresIn: data.expiresIn,
          token: data.token,
        };
        saveAuthData(authData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <Typography variant="h1" gutterBottom>
        Login
      </Typography>
      {err ? (
        <Box className={styles.error}>
          <Typography color="error">Incorrect login credentials</Typography>
        </Box>
      ) : null}
      <Box component="form" className={styles.form}>
        <TextField
          color="secondary"
          value={username}
          onChange={onUsernameChange}
          label="Username"
          name="username"
          required
        />
        <TextField
          value={password}
          type="password"
          onChange={onPasswordChange}
          label="Password"
          name="password"
          required
        />
        <Button variant="outlined" type="button" onClick={onLogin}>
          Login
        </Button>
      </Box>
      <Button
        onClick={(e) => {
          logout();
        }}
      >
        Logout
      </Button>
      <Typography variant="subtitle1">
        Not a member yet?{' '}
        <Link href="/signup">
          <a className={styles.login}>Sign up</a>
        </Link>
      </Typography>
    </Layout>
  );
};

export default Login;
