import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Cardlist from './Cardlist';

function CardlistAdd() {
   const [updateAddList, setUpdateAddList] = useState(false);

   const handleAddListBtn = () => {
      setUpdateAddList(true);
   }

   const handleClose = () => {
      setUpdateAddList(false);
   }

   return (
      <div className='custom-container'>
         <Cardlist />
         <div className="cardlist-add-section">
            {
               updateAddList === false 
               ? 
               <Button variant="contained" size='large' className='cardlist-add-btn' startIcon={<AddIcon />} onClick={handleAddListBtn}>
                  Add another list
               </Button>
               : <div className='list-add-controls'>
                  <TextField fullWidth id="outlined-basic" variant="outlined" placeholder='Enter list title...' />
                  <div className="add-close-btn">
                     <Button variant='contained' size='small'>Add list</Button>
                     <CloseIcon onClick={handleClose} />
                  </div>
               </div>
            }
         </div>
      </div>
   )
}

export default CardlistAdd;
