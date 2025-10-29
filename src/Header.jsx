import { Button, Toolbar } from '@mui/material';
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
                        <TextField class="titleTextBox" id="outlined-basic" label="" variant="outlined" size="small" defaultValue="My Document" />
                        <div class="menuBarContainer leftSideHeaderItem">
                            <Toolbar variant="dense" disableGutters={true}>
                                <Button id="basic-button" color="black">
                                    File
                                </Button>
                                <Button id="basic-button" color="black">
                                    Edit
                                </Button>
                                <Button id="basic-button" color="black">
                                    View
                                </Button>
                                <Button id="basic-button" color="black">
                                    Insert
                                </Button>
                                <Button id="basic-button" color="black">
                                    Format
                                </Button>
                                <Button id="basic-button" color="black">
                                    Tools
                                </Button>
                                <Button id="basic-button" color="black">
                                    Extensions
                                </Button>
                                <Button id="basic-button" color="black">
                                    Help
                                </Button>
                            </Toolbar>
                        </div>
                    </div>
                </div>
                <div class="rightSideHeaderContainer fullHeaderItem">
                    <div class="rightSideHeaderItem">
                        <Button variant='contained'>
                            Share
                        </Button>
                    </div>
                    <div class="rightSideHeaderItem">
                        <AccountCircleIcon fontSize='large'/>
                    </div>
                </div>
                
            </div>
        </>
    )
}