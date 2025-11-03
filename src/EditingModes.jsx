import {Button, Toolbar, Tooltip} from '@mui/material';

export default function EditingModes({currentMode, handleModeChange}) {
    return (
      <div class = "editingHeader">
        <Toolbar>
          Current Mode:
          <Tooltip title="You can directly modify the document content here">
            <Button
            size = "small"
            variant = {currentMode == "edit" ? "contained" : "outlined"}
            onClick = {() => handleModeChange("edit")}
            color = {currentMode == "edit" ? "success" : "primary"}
            sx={{ m: 1 }}
            >
              Editing
            </Button>
          </Tooltip>
          <Tooltip title="Your changes will appear as tracked suggestions">
            <Button
            size = "small"
            variant = {currentMode == "suggest" ? "contained" : "outlined"}
            onClick = {() => handleModeChange("suggest")}
            color = {currentMode == "suggest" ? "success" : "primary"}
            sx={{ m: 1 }}
            >
              Suggesting
            </Button>
          </Tooltip>
          <Tooltip title="You can read the document but can't make changes">
            <Button
            size = "small"
            variant = {currentMode == "view" ? "contained" : "outlined"}
            onClick = {() => handleModeChange("view")}
            color = {currentMode == "view" ? "success" : "primary"}
            sx={{ m: 1 }}
            >
              Viewing
            </Button>
          </Tooltip>
        
      </Toolbar>
      </div>
      
    );
}