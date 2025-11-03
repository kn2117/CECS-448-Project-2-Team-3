import {Button, Toolbar} from '@mui/material';

export default function EditingModes({currentMode, handleModeChange}) {
    return (
      <div class = "editingHeader">
        <Toolbar>
          Current Mode:
          <Button
          size = "small"
          variant = {currentMode == "edit" ? "contained" : "outlined"}
          onClick = {() => handleModeChange("edit")}
          color = {currentMode == "edit" ? "success" : "primary"}
           sx={{ m: 1 }}
          >
            Editing
          </Button>
          <Button
          size = "small"
          variant = {currentMode == "suggest" ? "contained" : "outlined"}
          onClick = {() => handleModeChange("suggest")}
          color = {currentMode == "suggest" ? "success" : "primary"}
           sx={{ m: 1 }}
          >
            Suggesting
          </Button>
          <Button
          size = "small"
          variant = {currentMode == "view" ? "contained" : "outlined"}
          onClick = {() => handleModeChange("view")}
          color = {currentMode == "view" ? "success" : "primary"}
           sx={{ m: 1 }}
          >
            Viewing
          </Button>
        
      </Toolbar>
      </div>
      
    );
}