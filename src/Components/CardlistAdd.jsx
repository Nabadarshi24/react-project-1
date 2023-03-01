import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Cardlist from './Cardlist';

function CardlistAdd() {
   const [updateAddList, setUpdateAddList] = useState(false);
   const [cardlists, setCardlists] = useState([]);
   const [inputValue, setInputValue] = useState('');

   const handleAddBtnClick = () => {
      if (inputValue === "" || inputValue == null) {
         return;
      }

      const newCardlist = {
         title: inputValue
      }

      const newCardlists = [...cardlists, newCardlist];

      setCardlists(newCardlists);
      setInputValue('');
   }
   const handleAddListBtn = () => {
      setUpdateAddList(true);
   }

   const handleClose = () => {
      setUpdateAddList(false);
   }

   return (
      <div className='custom-container'>
         {
            cardlists.map((cardlist, index) => (
               <Cardlist cardlist={cardlist} key={index} />
            ))
         }
         <div className="cardlist-add-section">
            {
               updateAddList === false
                  ?
                  <Button variant="contained" size='large' className='cardlist-add-btn' startIcon={<AddIcon />} onClick={() => handleAddListBtn()}>
                     Add another list
                  </Button>
                  : <div className='list-add-controls'>
                     <TextField
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        placeholder='Enter list title...'
                     />
                     <div className="add-close-btn">
                        <Button variant='contained' size='small' onClick={handleAddBtnClick}>Add list</Button>
                        <CloseIcon onClick={handleClose} />
                     </div>
                  </div>
            }
         </div>
      </div>
   )
}

export default CardlistAdd;