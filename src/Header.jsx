import * as React from 'react';
import './Header.css';
import logo from './assets/logo.png';
import { Button, IconButton, Menu, MenuItem, Toolbar, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import CommentIcon from '@mui/icons-material/Comment';
import PublicIcon from '@mui/icons-material/Public';

export default function Header() {
    return (
        <div class="fullHeaderContainer">
            <div class="leftSideHeaderContainer fullHeaderItem">
                <img class="logo leftSideHeaderItem" src={logo} />
                <div class="headerStackContainer leftSideHeaderItem">
                    <TextField class="titleTextBox headerStackItem" id="outlined-basic" label="" variant="outlined" size="small" defaultValue="My Document" />
                    <div class="menuBarContainer headerStackItem">
                        <Toolbar variant="dense" disableGutters={true}>
                            <MenuItemButton name="File" />
                            <MenuItemButton name="Edit" />
                            <MenuItemButton name="View" />
                            <MenuItemButton name="Insert" />
                            <MenuItemButton name="Format" />
                            <MenuItemButton name="Tools" />
                            <MenuItemButton name="Extensions" />
                            <MenuItemButton name="Help" />
                        </Toolbar>
                    </div>
                </div>
            </div>
            <div class="rightSideHeaderContainer fullHeaderItem">
                <div class="rightSideHeaderItem">
                    <IconButton>
                        <HistoryIcon />
                    </IconButton>
                </div>
                <div class="rightSideHeaderItem">
                    <IconButton>
                        <CommentIcon />
                    </IconButton>
                </div>
                <div class="rightSideHeaderItem">
                    <Button variant='contained' startIcon={<PublicIcon />}>
                        Share
                    </Button>
                </div>
                <div class="rightSideHeaderItem">
                    <IconButton>
                        <AccountCircleIcon fontSize='large'/>
                    </IconButton>
                </div>
            </div>
            
        </div>
    );
}

function MenuItemButton({name}) {
    return (
        <Button color="black" size="small">
            {name}
        </Button>
    );
}

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}