import React, { Fragment, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SubjectIcon from '@mui/icons-material/Subject';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardDetails from './CardDetails';
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import Config, { labelItems } from '../Config';

const Card = (props) => {
   const { card, cardlist, handleCardDeleteBtn, index } = props;
   const [open, setOpen] = useState(false);
   const [fullWidth, setFullWidth] = useState(true);
   const [maxWidth, setMaxWidth] = useState('md');
   const [descriptionValue, setDescriptionValue] = useState('');

   const callBack = (descriptionValue) => {
      setDescriptionValue(descriptionValue);
   };

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <Fragment>
         <div onClick={handleClickOpen} className="card">
            <div className="card-labels">
               {
                  card.labels.map((label, index) => {
                     // console.log({index: index}, {lbI: labelItems[index].label});
                     const selectedLabel = labelItems.find(labelItem => labelItem.value === label);
                     return <span
                        className={`card-label-item ${selectedLabel.className}`}
                        key={index}
                     >
                        <CircleIcon className='icon-size' />
                        {selectedLabel.label}
                     </span>
                  })
               }
               <DeleteOutlinedIcon onClick={() => handleCardDeleteBtn(index)} className='card-delete-icon' fontSize='15px' />
            </div>

            <div className="card-title">
               <span>{card.title}</span>
            </div>

            <div className="card-footer">
               <div className="due-date">
                  <span><AccessTimeIcon className='font-size' /></span>
                  <span>Feb 8, 2025</span>
               </div>
               <div className="description">
                  {
                     descriptionValue !== '' &&
                     <SubjectIcon className='font-size' />
                  }
               </div>
               <div className="checklist-items">
                  {
                     card.checklistTitle !== '' &&
                     <>
                        <span><LibraryAddCheckOutlinedIcon className='font-size' /></span>
                        <span>{card.checklists.filter(x => x.isChecked).length}/{card.checklists.length}</span>
                     </>
                  }
               </div>
            </div>
         </div>

         <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
         >
            <DialogActions>
               <Button onClick={handleClose}>Close</Button>
            </DialogActions>
            <DialogContent>
               <CardDetails callBack={callBack} card={card} cardlist={cardlist} />
            </DialogContent>
         </Dialog>
      </Fragment>
   )
}

export default Card;

