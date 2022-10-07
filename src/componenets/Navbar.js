import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { deleteContext } from './context/ContextProvider';
import Alert from 'react-bootstrap/Alert';

const Navbar = () => {
    const { dltTask, setDeltTask } = useContext(deleteContext)
    console.log(dltTask)

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: "#232f3e" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: "center" }}>
                            Redux To-Do app
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Box>
{
    dltTask ? <Alert variant="danger" onClose={() => setDeltTask(false)} dismissible>
    <Alert.Heading>Task is Removed successfully!!!!!!!!</Alert.Heading>
</Alert> : ""
}
            
        </>
    )
}

export default Navbar