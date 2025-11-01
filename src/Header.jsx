import * as React from 'react';
import './Header.css';
import logo from './assets/logo.png';
import { Button, Divider, IconButton, Menu, MenuItem, Toolbar, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArticleIcon from '@mui/icons-material/Article';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import HistoryIcon from '@mui/icons-material/History';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import PublicIcon from '@mui/icons-material/Public';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function Header() {
    return (
        <div class="fullHeaderContainer">
            <div class="leftSideHeaderContainer fullHeaderItem">
                <img class="logo leftSideHeaderItem" src={logo} />
                <div class="headerStackContainer leftSideHeaderItem">
                    <div class="titleBarContainer headerStackItem">
                        <DocTitle />
                        <div class="titleBarItem">
                            <StarBorderOutlinedIcon fontSize="small"/>
                        </div>
                        <div class="titleBarItem">
                            <AddToDriveIcon fontSize="small" />
                        </div>
                        <div class="titleBarItem">
                            <CloudDoneOutlinedIcon fontSize="small" />
                        </div>
                    </div>
                    <div class="menuBarContainer headerStackItem">
                        <Toolbar variant="dense" disableGutters={true}>
                            <MenuButton name="File" />
                            <MenuItemButton name="Edit" />
                            <MenuButton name="View" />
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
        { name: "New", icon: <ArticleIcon /> },
        { name: "Open", icon: <FolderOutlinedIcon /> },
        { name: "Make a Copy", icon: <FileCopyOutlinedIcon /> },
        "divider",
        { name: "Share", icon: <PersonAddAlt1OutlinedIcon /> },
        { name: "Email", icon: <EmailOutlinedIcon /> },
        { name: "Download", icon: <FileDownloadOutlinedIcon /> },
        "divider",
        { name: "Rename", icon: <DriveFileRenameOutlineOutlinedIcon /> },
        { name: "Move", icon: <DriveFileMoveOutlinedIcon /> },
        { name: "Add Shortcut to Drive", icon: <AddToDriveIcon /> },
        { name: "Move to Trash", icon: <DeleteOutlinedIcon /> },
        "divider",
        { name: "Version History", icon: <HistoryIcon /> },
        "divider",
        { name: "Details", icon: <InfoOutlinedIcon /> },
        { name: "Security Limitations", icon: <PolicyOutlinedIcon /> },
        { name: "Language", icon: <LanguageOutlinedIcon /> },
        "divider",
        { name: "Page Setup", icon: <DescriptionOutlinedIcon /> },
        { name: "Print Preview", icon: <PlagiarismOutlinedIcon /> },
        { name: "Print", icon: <PrintOutlinedIcon /> }
    ];

    let viewItems = [
        { name: "Editing Mode", icon: <ModeEditOutlinedIcon /> },
        { name: "Suggesting Mode", icon: <RateReviewOutlinedIcon /> },
        { name: "Viewing Mode", icon: <VisibilityOutlinedIcon /> },
        "divider",
        { name: "Comments", icon: <CommentOutlinedIcon /> },
        { name: "Collapse tabs & outlines sidebar", icon: <ListOutlinedIcon /> },
        "divider",
        { name: "Show print layout", icon: <CheckOutlinedIcon /> },
        { name: "Show ruler", icon: "" },
        { name: "Show equation toolbar", icon: "" },
        { name: "Show non-printing characters", icon: "" },
        "divider",
        { name: "Full screen", icon: <FullscreenOutlinedIcon /> }
    ];
    let menuItems = []

    if (name === "File") 
    {
        menuItems = fileItems.slice();
    }

    else
    {
        menuItems = viewItems.slice();
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
                    <span style={{ marginLeft: item.icon ? 8 : 32 }}>{item.name}</span>
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