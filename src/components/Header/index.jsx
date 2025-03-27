import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ClassNames } from '@emotion/react';
// import { NavLink } from 'react-router-dom';

// import { Code } from '@mui/icons-material';
export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <GitHubIcon className={ClassNames.Menubutton} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        EZ SHOP
                    </Typography>

                    <Button color='inherit'>Todo</Button>
                    <Button color='inherit'>Aibum</Button>
                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}