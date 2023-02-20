import React, { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TextField from '@mui/material/TextField';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Card from './Card';
import DoneIcon from '@mui/icons-material/Done';

function Cardlist(props) {
   const { cardlist } = props;
   console.log(props);
   const [cardListTitle, setCardListTitle] = useState(false);
   const [updateCard, setUpdateCard] = useState(null);

   const [cards, setCards] = useState([]);
   const [inputValue, setInputValue] = useState('');

   const handleAddCardBtn = () => {
      if (inputValue === "" || inputValue == null) {
         return;
      }

      const newCard = {
         title: inputValue,
         labels: [],
         descriptionValue: '',
         date: '',
         checklistTitle: 'Checklist',
         checklists: []
      }
      const newCards = [...cards, newCard];
      setCards(newCards);
      setInputValue('');
   }

   const handleTitle = () => {
      setCardListTitle(true);
   }

   const handleClose = () => {
      setCardListTitle(false);
   }

   const handleUpdateCard = () => {
      setUpdateCard(true);
   }

   const closeUpdateCard = () => {
      setUpdateCard(null);
   }
   return (
      <div className="card-list">
         <div className="card-list-card">
            {
               cardListTitle === false
                  ? <div className="card-title">
                     <span>{cardlist.title}</span>
                     <ModeEditIcon fontSize='15px' onClick={handleTitle} />
                     <MoreHorizIcon className='menu-icon' />
                  </div>
                  : <div className="editable-card-title">
                     <TextField className='title-edit-field' variant="outlined" />
                     <DoneIcon onClick={handleClose} />
                     <CloseIcon onClick={handleClose} />
                     <MoreHorizIcon className='menu-icon' />
                  </div>
            }

            {
               cards.map((card, index) => (
                  <Card card={card} cardlist={cardlist} key={index} />
               ))
            }

            <div className="cardlist-footer">
               {
                  updateCard === null
                     ? <Button variant="contained" size='large' className='bg-none' startIcon={<AddIcon />} onClick={handleUpdateCard}>
                        Add a card
                     </Button>
                     : <div>
                        <TextField
                           fullWidth
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           variant="outlined"
                           placeholder='Enter a title for this card...'
                        />
                        <div className="add-close-btn">
                           <Button variant='contained' size='small' onClick={handleAddCardBtn}>Add card</Button>
                           <CloseIcon onClick={closeUpdateCard} />
                        </div>
                     </div>
               }
            </div>
         </div>
      </div>
   )
}

export default Cardlist;
