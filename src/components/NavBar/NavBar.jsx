import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import Sidebar from '../Sidebar/Sidebar';

const NavBar = ({ theme }) => {
  console.log('NavBar');
  const isMobile = useMediaQuery('(max-width:600px)');
  const isAuthenticated = true;

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={styles.toolbar}>
          {isMobile && (
            <IconButton color="inherit" edge="start">
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} edge="end">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && 'search..'}

          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Link to="/profile/:id">
                <Button
                  sx={styles.linkButton}
                  color="inherit"
                  onClick={() => {}}
                >
                  {!isMobile && <>My Movies &nbsp;</>}
                  <Avatar
                    style={{ width: 30, height: 30 }}
                    alt="Profile"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  />
                </Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div>
        {/* style={styles.drawer} */}
        <nav style={styles.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              sx={styles.drawerPaper}
              ModalProps={{ keepMounted: true }} // Better open performance on mobile.
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer sx={styles.drawerPaper} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
