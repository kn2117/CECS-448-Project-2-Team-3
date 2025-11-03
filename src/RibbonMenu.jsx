import React, { useState } from 'react';
import {
    IconButton,
    Select,
    MenuItem,
    Divider,
    ToggleButton,
    ToggleButtonGroup,
    Toolbar,
    Tooltip
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import './RibbonMenu.css';

export default function RibbonMenu() {
    const [formats, setFormats] = useState([]);
    const [alignment, setAlignment] = useState('left');
    const [fontSize, setFontSize] = useState('11');
    const [fontFamily, setFontFamily] = useState('Arial');

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        <div className="ribbon-container">
            <Toolbar
                variant="dense"
                disableGutters
                sx={{
                    minHeight: '36px',
                    padding: '2px 8px',
                    gap: '4px',
                    borderBottom: '1px solid #e0e0e0',
                    backgroundColor: '#f8f9fa'
                }}
            >
                {/* undo and redo */}
                <Tooltip title="Undo">
                    <IconButton size="small" sx={{ padding: '2px' }}>
                        <UndoIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Redo">
                    <IconButton size="small" sx={{ padding: '2px' }}>
                        <RedoIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                </Tooltip>

                <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

                {/* fonts */}
                <Select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    size="small"
                    sx={{
                        minWidth: 120,
                        height: 26,
                        fontSize: '0.875rem',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #dadce0'
                        }
                    }}
                >
                    <MenuItem value="Arial">Arial</MenuItem>
                    <MenuItem value="Calibri">Calibri</MenuItem>
                    <MenuItem value="Comic Sans MS">Comic Sans MS</MenuItem>
                    <MenuItem value="Georgia">Georgia</MenuItem>
                    <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                    <MenuItem value="Verdana">Verdana</MenuItem>
                </Select>

                {/* font size */}
                <Select
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    size="small"
                    sx={{
                        minWidth: 50,
                        height: 26,
                        fontSize: '0.875rem',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #dadce0'
                        }
                    }}
                >
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="11">11</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                    <MenuItem value="14">14</MenuItem>
                    <MenuItem value="16">16</MenuItem>
                    <MenuItem value="18">18</MenuItem>
                    <MenuItem value="24">24</MenuItem>
                    <MenuItem value="36">36</MenuItem>
                </Select>

                <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

                {/* text formatting */}
                <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    size="small"
                    sx={{ height: 26 }}
                >
                    <ToggleButton value="bold" aria-label="bold" sx={{ padding: '4px 8px' }}>
                        <Tooltip title="Bold">
                            <FormatBoldIcon sx={{ fontSize: 18 }} />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic" sx={{ padding: '4px 8px' }}>
                        <Tooltip title="Italic">
                            <FormatItalicIcon sx={{ fontSize: 18 }} />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="underline" aria-label="underline" sx={{ padding: '4px 8px' }}>
                        <Tooltip title="Underline">
                            <FormatUnderlinedIcon sx={{ fontSize: 18 }} />
                        </Tooltip>
                    </ToggleButton>
                </ToggleButtonGroup>

                {/* text color */}
                <Tooltip title="Text color">
                    <IconButton size="small" sx={{ padding: '2px' }}>
                        <FormatColorTextIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                </Tooltip>

                {/* highlight color */}
                <Tooltip title="Highlight color">
                    <IconButton size="small" sx={{ padding: '2px' }}>
                        <FormatColorFillIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                </Tooltip>

                <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

                {/* alignment */}
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    size="small"
                    sx={{ height: 32 }}
                >
                    <ToggleButton value="left" aria-label="left aligned">
                        <Tooltip title="Align left">
                            <FormatAlignLeftIcon fontSize="small" />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <Tooltip title="Align center">
                            <FormatAlignCenterIcon fontSize="small" />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <Tooltip title="Align right">
                            <FormatAlignRightIcon fontSize="small" />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified">
                        <Tooltip title="Justify">
                            <FormatAlignJustifyIcon fontSize="small" />
                        </Tooltip>
                    </ToggleButton>
                </ToggleButtonGroup>

                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

                {/* lists */}
                <Tooltip title="Numbered list">
                    <IconButton size="small" sx={{ padding: '2px' }}>
                        <FormatListNumberedIcon sx={{ fontSize: 18}} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Bulleted list">
                    <IconButton size="small" sx={{ padding: '4px' }}>
                        <FormatListBulletedIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

                {/* indentation */}
                <Tooltip title="Decrease indent">
                    <IconButton size="small" sx={{ padding: '4px' }}>
                        <FormatIndentDecreaseIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Increase indent">
                    <IconButton size="small" sx={{ padding: '4px' }}>
                        <FormatIndentIncreaseIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

                {/* insert link */}
                <Tooltip title="Insert link">
                    <IconButton size="small" sx={{ padding: '4px' }}>
                        <LinkIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                {/* insert image */}
                <Tooltip title="Insert image">
                    <IconButton size="small" sx={{ padding: '4px' }}>
                        <ImageIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </div>
    );
}