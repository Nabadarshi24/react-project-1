import React, { Fragment, useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TextField from '@mui/material/TextField';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Card from './Card';
import DoneIcon from '@mui/icons-material/Done';
import CardlistAddDelete from './CardlistAddDelete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function Cardlist(props) {
   const { cardlist } = props;
   console.log(props);
   const [open, setOpen] = useState(false);
   const [fullWidth, setFullWidth] = useState(true);
   const [maxWidth, setMaxWidth] = useState('xs');
   const [cardListTitle, setCardListTitle] = useState('');
   const [editCardlistTitleSave, setEditCardlistTitleSave] = useState(cardlist.title);
   const [updateCard, setUpdateCard] = useState(null);
   const [cards, setCards] = useState([]);
   const [inputValue, setInputValue] = useState('');

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleDialogClose = () => {
      setOpen(false);
   };

   const handleAddCardBtn = () => {
      if (inputValue === "" || inputValue === null) {
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

   const handleClose = (e) => {
      setCardListTitle('');
      cardlist.title = editCardlistTitleSave;
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
               cardListTitle === ''
                  ? <div className="card-title">
                     <span>{cardlist.title}</span>
                     <ModeEditIcon fontSize='15px' onClick={handleTitle} />
                     <MoreHorizIcon className='menu-icon' />
                  </div>
                  : <div className="editable-card-title">
                     <TextField
                        className='title-edit-field'
                        variant="outlined"
                        value={editCardlistTitleSave}
                        InputProps={{
                           autoFocus: true
                        }}
                        onChange={(e) => setEditCardlistTitleSave(e.target.value)}
                     />
                     <DoneIcon onClick={handleClose} />
                     <CloseIcon onClick={handleClose} />
                     <MoreHorizIcon onClick={handleClickOpen} className='menu-icon' />
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
         <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleDialogClose}
         >
            <DialogActions>
               <CloseIcon onClick={handleDialogClose} />
            </DialogActions>
            <DialogContent className='edit-dialog'>
               <CardlistAddDelete />
            </DialogContent>
         </Dialog>
      </div>
   )
}

export default Cardlist;
