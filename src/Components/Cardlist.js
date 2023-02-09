import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TextField from '@mui/material/TextField';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function Cardlist() {
  return (
    <div className="card-list-container">
      <div className="card">
        <div className="card-title">
          <span>Title 1</span>
          <ModeEditIcon fontSize='15px' />
          <MoreHorizIcon className='menu-icon' />
        </div>
        <div className="card-title">
          <TextField className='title-edit-field' variant="outlined" />
          <MoreHorizIcon className='menu-icon' />
        </div>
        <Button variant="contained" size='large' className='bg-none' startIcon={<AddIcon />}>
          Add another list
        </Button>
        <div>
          <TextField fullWidth variant="outlined" placeholder='Enter a title for this card...' />
          <div className="add-close-btn">
            <Button variant='contained' size='small'>Add list</Button>
            <CloseIcon />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <span>Title 2</span>
          <ModeEditIcon fontSize='15px' />
          <MoreHorizIcon className='menu-icon' />
        </div>
        <div className="card-title">
          <TextField className='title-edit-field' variant="outlined" />
          <MoreHorizIcon className='menu-icon' />
        </div>
        <Button variant="contained" size='large' className='bg-none' startIcon={<AddIcon />}>
          Add another list
        </Button>
        <div>
          <TextField fullWidth variant="outlined" placeholder='Enter a title for this card...' />
          <div className="add-close-btn">
            <Button variant='contained' size='small'>Add list</Button>
            <CloseIcon />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <span>Title 3</span>
          <ModeEditIcon fontSize='15px' />
          <MoreHorizIcon className='menu-icon' />
        </div>
        <div className="card-title">
          <TextField className='title-edit-field' variant="outlined" />
          <MoreHorizIcon className='menu-icon' />
        </div>
        <Button variant="contained" size='large' className='bg-none' startIcon={<AddIcon />}>
          Add another list
        </Button>
        <div>
          <TextField fullWidth variant="outlined" placeholder='Enter a title for this card...' />
          <div className="add-close-btn">
            <Button variant='contained' size='small'>Add list</Button>
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardlist
