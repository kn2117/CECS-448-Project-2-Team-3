import * as React from 'react';
import './Header.css';
import logo from './assets/logo.png';
import { Button, Divider, IconButton, Menu, MenuItem, Toolbar, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HistoryIcon from '@mui/icons-material/History';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import PublicIcon from '@mui/icons-material/Public';

export default function Header() {
    return (
        <div class="fullHeaderContainer">
            <div class="leftSideHeaderContainer fullHeaderItem">
                <img class="logo leftSideHeaderItem" src={logo} />
                <div class="headerStackContainer leftSideHeaderItem">
                    <DocTitle />
                    <div class="menuBarContainer headerStackItem">
                        <Toolbar variant="dense" disableGutters={true}>
                            <MenuButton name="File" />
                            <MenuButton name="Edit" />
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
                        <CommentOutlinedIcon />
                    </IconButton>
                </div>
                <div class="rightSideHeaderItem shareButtonContainer">
                    <Button
                        variant="contained"
                        startIcon={<PublicIcon />}
                        sx={{
                            borderRadius: '20px 0 0 20px',
                            textTransform: 'none',
                            backgroundColor: 'rgb(201, 230, 253)',
                            color: 'rgb(7, 28, 51)'
                        }}
                    >
                        Share
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: '0 20px 20px 0',               // remove inner corners
                            textTransform: 'none',
                            backgroundColor: 'rgb(201, 230, 253)',
                            color: 'rgb(7, 28, 51)',
                            minWidth: '40px',              // narrow slice for arrow
                            paddingX: 0
                        }}
                    >
                        <ArrowDropDownIcon />
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
        <Button color="black" size="small"
            sx={{
                paddingY: 0,        // vertical padding
                paddingX: 1,        // horizontal padding (theme spacing unit, 1 = 8px)
                minWidth: 'auto',
                textTransform: 'none',
            }}
        >
            {name}
        </Button>
    );
}

function MenuButton({name}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                id="basic-button"
                color="black"
                size="small"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    paddingY: 0,        // vertical padding
                    paddingX: 1,        // horizontal padding (theme spacing unit, 1 = 8px)
                    minWidth: 'auto',
                    textTransform: 'none',
                }}
            >
                {name}
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
                <MenuItems name={name} handleClose={handleClose} />
            </Menu>
        </>
    );
}

function MenuItems({name, handleClose}) {
    let fileItems = [
        { name: "New", icon: "" },
        { name: "Open", icon: "" },
        { name: "Make a Copy", icon: "" },
        "divider",
        { name: "Share", icon: "" },
        { name: "Email", icon: "" },
        { name: "Download", icon: "" },
        "divider",
        { name: "Rename", icon: "" },
        { name: "Move", icon: "" },
        { name: "Add Shortcut to Drive", icon: "" },
        { name: "Move to Trash", icon: "" },
        "divider",
        { name: "Version History", icon: "" },
        "divider",
        { name: "Details", icon: "" },
        { name: "Security Limitations", icon: "" },
        { name: "Language", icon: "" },
        "divider",
        { name: "Page Setup", icon: "" },
        { name: "Print Preview", icon: "" },
        { name: "Print", icon: "" }
    ];

    let editItems = [
        { name: "Undo", icon: "" },
        { name: "Redo", icon: "" },
        "divider",
        { name: "Cut", icon: "" },
        { name: "Copy", icon: "" },
        { name: "Paste", icon: "" },
        { name: "Paste Without Formatting", icon: "" },
        "divider",
        { name: "Select All", icon: "" },
        { name: "Delete", icon: "" },
        { name: "Find and Replace", icon: "" }
    ];
    let menuItems = []

    if (name === "File") 
    {
        menuItems = fileItems.slice();
    }

    else
    {
        menuItems = editItems.slice();
    }

    let menuItemsDecorated = []

    for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];
        if (item === "divider")
        {
            menuItemsDecorated.push(
                <Divider />
            )
        }
        else 
        {
            menuItemsDecorated.push(
                <MenuItem key={item.name} onClick={handleClose}>
                    {item.icon ? item.icon : null}
                    <span style={{ marginLeft: item.icon ? 8 : 0 }}>{item.name}</span>
                </MenuItem>
            )
        }
    }

    return (
        <>
            {menuItemsDecorated}
        </>
    )
}

function DocTitle() {
    const [value, setValue] = React.useState("My Document");
    return (
        <TextField
            value={value}
            onChange={e => setValue(e.target.value)}
            sx={{
                width: `${value.length + 1}ch`,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'transparent',   // hide normally
                    },
                    '&:hover fieldset': {
                        borderColor: '#1976d2',       // show on hover (use your theme color)
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',       // show when focused
                    },
                },
                '& .MuiInputBase-root': { height: '30px', padding: 0 },
                '& .MuiOutlinedInput-input': { padding: '4px 8px' },
            }}
        />
    );
}