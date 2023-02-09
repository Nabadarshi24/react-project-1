import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Cardlist from './Cardlist';

function CardlistAdd() {
  return (
    <div className='custom-container'>
      <Cardlist />
      <div className="cardlist-add-section">
        <Button variant="contained" size='large' className='cardlist-add-btn' startIcon={<AddIcon />}>
          Add another list
        </Button>
        <div className='list-add-controls'>
          <TextField fullWidth id="outlined-basic" variant="outlined" placeholder='Enter list title...' />
          <div className="add-close-btn">
            <Button variant='contained' size='small'>Add list</Button>
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardlistAdd
