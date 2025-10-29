import { Button, Menu, Toolbar } from '@mui/material';
import './Header.css'
import TextField from '@mui/material/TextField';
import logo from './assets/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
    return (
        <>
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
                        <Button>
                            History
                        </Button>
                        <Button>
                            Comments
                        </Button>
                    </div>
                    <div class="rightSideHeaderItem">
                        <Button variant='contained'>
                            Share
                        </Button>
                    </div>
                    <div class="rightSideHeaderItem">
                        <Button>
                            <AccountCircleIcon fontSize='large'/>
                        </Button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

function MenuItemButton({name}) {
    return (
        <>
            <Button id="basic-button" color="black">
                {name}
            </Button>
        </>
    )
}