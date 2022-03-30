import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Appbar = () => {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography
            sx={{ flexGrow: 1 }}
            variant="h6"
            component="div"
            onClick={() => {
              router.push('/');
            }}
          >
            Blog App
          </Typography>
          <Link href="/signup">
            <a>Signup</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
