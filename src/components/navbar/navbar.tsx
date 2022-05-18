import {
    AppBar, Avatar, Box,
    Button, Container, IconButton,
    Menu, MenuItem, Toolbar,
    Tooltip, Typography
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { loggedSelector, logout } from '../../features/authSlice';
import { useDispatch } from 'react-redux';
import { store } from '../../app/store';

const pages = [
    { label: 'Carrera', path: '/career' },
    { label: 'Materias', path: '/subjects' },
    { label: 'Opiniones', path: '/opinions' },
    { label: 'Acerca', path: '/about' }
];
const settings = [{label: 'Logout', path: '/'}];

const CustomNavbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const isLogged = useAppSelector(loggedSelector);
    const dispatch = useDispatch();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const navigate = useNavigate();

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = async () => {
        handleCloseNavMenu();
        await store.dispatch(logout(''));
    }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#002333', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button variant='text' color='inherit' onClick={() => navigate('/')} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            ITS SKILLS
                        </Typography>
                    </Button>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={() => navigate(page.path)}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Button variant='text' color='inherit' onClick={() => navigate('/')} sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            ITS SKILLS
                        </Typography>
                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => navigate(page.path)}
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                    <Button variant='text' sx={{ display: isLogged ? 'none' : 'box' }}
                        onClick={() => navigate('/login')}
                    > iniciar sesion</Button>
                    <Box sx={{ flexGrow: 0, display: isLogged ? 'box' : 'none' }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User Image" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <MenuItem key={setting.label} onClick={handleLogout}>
                                    <Typography textAlign="center">{setting.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default CustomNavbar