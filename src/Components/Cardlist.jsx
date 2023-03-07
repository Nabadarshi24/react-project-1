import React, { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TextField from '@mui/material/TextField';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Card from './Card';
import DoneIcon from '@mui/icons-material/Done';
import { IconButton, Menu, MenuItem } from '@mui/material';

const Cardlist = (props) => {
   const { cardlist, handleDeleteCardlistBtn, index } = props;
   console.log(props);
   const [cardListTitle, setCardListTitle] = useState('');
   const [editCardlistTitleSave, setEditCardlistTitleSave] = useState(cardlist.title);
   const [updateCard, setUpdateCard] = useState(null);
   const [cards, setCards] = useState([]);
   const [inputValue, setInputValue] = useState('');
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);

   const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
   };

   const handleCardlistDelete = () => {
      setAnchorEl(null);
      handleDeleteCardlistBtn(index);
   };

   const handleAddCardBtn = () => {
      if (inputValue === "" || inputValue === null) {
         return;
      }

      const newCard = {
         title: inputValue,
         labelTitle: '',
         dateTitle: '',
         labels: [],
         descriptionValue: '',
         date: '',
         checklistTitle: '',
         checklists: []
      };
      const newCards = [...cards, newCard];

      setCards(newCards);
      setInputValue('');
   };

   const handleCardDeleteBtn = (index) => {
      const newCards = [...cards];
      newCards.splice(index, 1);

      setCards(newCards);

      console.log(cards);
   };

   const handleTitle = () => {
      setCardListTitle(true);
   };

   const handleClose = (e) => {
      setCardListTitle('');

      cardlist.title = editCardlistTitleSave;
   };

   const handleUpdateCard = () => {
      setUpdateCard(true);
   };

   const closeUpdateCard = () => {
      setUpdateCard(null);
   };

   return (
      <div className="card-list">
         <div className="card-list-card">
            {
               cardListTitle === ''
                  ? <div className="card-title">
                     <span>{cardlist.title}</span>
                     <ModeEditIcon fontSize='15px' onClick={handleTitle} />
                     <IconButton
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleMenuClick}
                     >
                        <MoreHorizIcon className='menu-icon' />
                     </IconButton>
                     <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        MenuListProps={{
                           'aria-labelledby': 'basic-button',
                        }}
                     >
                        <MenuItem onClick={handleMenuClose}>Add card...</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Copy list...</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Move list...</MenuItem>
                        <MenuItem onClick={handleCardlistDelete}>Archive this list</MenuItem>
                     </Menu>
                  </div>
                  : <div className="editable-card-title clearfix">
                     <TextField
                        className='title-edit-field'
                        variant="outlined"
                        value={editCardlistTitleSave}
                        InputProps={{
                           autoFocus: true
                        }}
                        onChange={(e) => setEditCardlistTitleSave(e.target.value)}
                     />
                     <DoneIcon className='common-font-size' onClick={handleClose} />
                     <CloseIcon className='common-font-size' onClick={handleClose} />
                  </div>
            }

            {
               cards.map((card, index) => (
                  <Card card={card} handleCardDeleteBtn={handleCardDeleteBtn} cardlist={cardlist} index={index} key={index} />
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
                        <div className="common-add-close-btn">
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
