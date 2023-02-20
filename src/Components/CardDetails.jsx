import React, { useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TextField from '@mui/material/TextField';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SubjectIcon from '@mui/icons-material/Subject';
import SellIcon from '@mui/icons-material/Sell';
import CloseIcon from '@mui/icons-material/Close';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LabelDetails from './LabelDetails';

function CardDetails(props) {
   const { card, cardlist } = props;
   const [open, setOpen] = useState(false);
   const [fullWidth, setFullWidth] = useState(true);
   const [maxWidth, setMaxWidth] = useState('xs');
   const [title, setTitle] = useState(card.title);
   const [editCardTitle, setEditCardTitle] = useState(false);
   const [openLabel, setOpenLabel] = useState(null);
   const [openDate, setOpenDate] = useState(null);
   const [openChecklist, setOpenChecklist] = useState(null);
   const [description, setDescription] = useState(null);
   const [descriptionValue, setDescriptionValue] = useState(card.descriptionValue);
   const [checklistTitle, setChecklistTitle] = useState(card.checklistTitle);
   const [isEditChecklistTitle, setIsEditChecklistTitle] = useState(false);
   const [checklists, setChecklists] = useState(card.checklists);
   const [checklistValue, setChecklistValue] = useState('');
   const [showAddChecklistButton, setAddChecklistButton] = useState(true);


   const handleChecklistTitle = () => {
      setIsEditChecklistTitle(false);
      card.checklistTitle = checklistTitle;
   }

   const handleCloseChecklistTitleButtton = () => {
      setIsEditChecklistTitle(false);
   }

   const handleCloseAddChecklistButtton = () => {
      setAddChecklistButton(true);
   }

   const handleShowAddChecklistButton = () => {
      setAddChecklistButton(false);
   }

   const handleChecklistTitleEdit = () => {
      setIsEditChecklistTitle(true);
   }

   const handleChecklistAddBtn = () => {
      if (checklistValue === "" || checklistValue == null) {
         return;
      }

      const newChecklist = {
         isChecked: false,
         name: checklistValue
      }

      const newChecklists = [...checklists, newChecklist];

      setChecklists(newChecklists);
      setChecklistValue('');
      card.checklists = checklists;
   }

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleEditCardTitle = () => {
      setEditCardTitle(true);
   }

   const handleEditCardTitleClose = () => {
      setEditCardTitle(false);
      card.title = title;
   }

   const handleLabelOpen = () => {
      setOpenLabel(true);
   }

   const handleDateOpen = () => {
      setOpenDate(true);
   }

   const handleChecklistOpen = () => {
      setOpenChecklist(true);
   }

   const handleChecklistDelete = () => {
      setOpenChecklist(null);
      setChecklists([]);
   }

   const handleChecklistItemDelete = (index) => {
      const newChecklists = [...checklists];

      newChecklists.splice(index, 1);

      setChecklists(newChecklists);
   }

   const handleDescriptionEdit = () => {
      setDescription(true);
   }

   const handleDescriptionSave = () => {
      setDescription(null);
      card.descriptionValue = descriptionValue;
   }

   const handleDescriptionCancel = () => {
      setDescription(null);
   }



   return (
      <div className='card-details clearfix'>
         <div className="dialogue-details-header">
            <div className="dialogue-title">
               <span><LaptopMacIcon className='dialogue-icon-size' /></span>
               <div className="window-title">
                  {
                     editCardTitle === false
                        ? <h2 onClick={handleEditCardTitle}>{card.title}</h2>
                        : <TextField
                           focused={editCardTitle}
                           InputProps={{
                              autoFocus: true
                           }}
                           value={title}
                           fullWidth
                           onChange={(e) => setTitle(e.target.value)}
                           variant="outlined"
                           onBlur={handleEditCardTitleClose}
                        />
                  }
               </div>
            </div>
            <div className="window-header-inline-content">
               <span>in list</span> <a href="#">{cardlist.title}</a>
            </div>
         </div>

         <div className="dialogue-main-col">
            <div className="label-date-container">
               {
                  openLabel === null
                     ? null
                     : <><h3>Labels</h3>
                        <div className="label-container">
                           {card.labels}
                           <Button variant="outlined" className='label-btn' size="small" onClick={handleClickOpen}>+</Button>
                        </div>
                     </>
               }

               {
                  openDate === null
                     ? null
                     : <><h3>Dates</h3>
                        <div className="date-container">
                           <div className="date-container-btn">
                              <span className='margin-right'>Feb 14, 2024</span>
                              <span><EditIcon fontSize='15px' /></span>
                           </div>
                        </div>
                     </>
               }
            </div>
            <div className="description">
               {
                  description === null
                     ? <>
                        <div className="desc-title">
                           <span><SubjectIcon /></span>
                           <h3>Description</h3>
                           <Button size='small' variant='outlined' className='edit-desc' onClick={handleDescriptionEdit} >Edit</Button>
                        </div>
                        <div className="desc-field">
                           {
                              descriptionValue === ''
                                 ? <TextField
                                    onClick={handleDescriptionEdit}
                                    fullWidth
                                    placeholder='Add a more detailed description...'
                                 />
                                 : <span className='desc-content' onClick={handleDescriptionEdit} >{descriptionValue}</span>
                           }
                        </div>
                     </>
                     : <div className="hidden-desc">
                        <div className="desc-title">
                           <span><SubjectIcon /></span>
                           <h3>Description</h3>
                           <Button size='small' variant='outlined' className='edit-desc' onClick={handleDescriptionEdit}>Edit</Button>
                        </div>
                        <TextField
                           fullWidth
                           id="outlined-multiline-static"
                           value={descriptionValue}
                           onChange={(e) => setDescriptionValue(e.target.value)}
                           multiline
                           // rows={4}
                           minRows={8}
                           maxRows={10}
                        />
                        <div className="hidden-desc-btn">
                           <span className='margin-right'>
                              <Button
                                 variant='contained'
                                 size='small'
                                 onClick={handleDescriptionSave}>
                                 Save
                              </Button>
                           </span>
                           <Button
                              varient='outlined'
                              size='small'
                              onClick={handleDescriptionCancel}>
                              Cancel
                           </Button>
                        </div>
                     </div>
               }

            </div>
            <div className="checklist">
               {
                  openChecklist === null
                     ? null
                     : <>
                        <>
                           {
                              isEditChecklistTitle === false
                                 ? <div className='checklist-title'>
                                    <span><LibraryAddCheckOutlinedIcon /></span>
                                    <h3>{checklistTitle}</h3>
                                    <div className="edit-delete-btn">
                                       <EditIcon onClick={handleChecklistTitleEdit} />
                                       <DeleteForeverIcon onClick={handleChecklistDelete} />
                                    </div>
                                 </div>
                                 : <>
                                    <span><LibraryAddCheckOutlinedIcon /></span>
                                    <TextField
                                       value={checklistTitle}
                                       InputProps={{
                                          autoFocus: true
                                       }}
                                       onChange={(e) => setChecklistTitle(e.target.value)}
                                       id="outlined-basic"
                                       variant="outlined"
                                    />
                                    <div className="add-close-btn">
                                       <Button onClick={handleChecklistTitle} variant='contained' size='small'>Save</Button>
                                       <CloseIcon onClick={handleCloseChecklistTitleButtton} />
                                    </div>
                                 </>
                           }
                        </>
                        <div className="checklist-add-container">
                           <FormGroup>
                              {
                                 checklists.map((checklist, index) => (
                                    <FormControlLabel
                                       key={index}
                                       control={<Checkbox />}
                                       label={<>{checklist.name}<DeleteForeverIcon onClick={() => handleChecklistItemDelete(index)} /></>}
                                    />
                                 ))
                              }
                           </FormGroup>
                        </div>
                        {
                           showAddChecklistButton === true
                              ? <Button onClick={handleShowAddChecklistButton} className='add-item-btn' varient='outlined'>Add an item</Button>
                              : <div className='checklist-title-edit'>
                                 <TextField
                                    value={checklistValue}
                                    onChange={(e) => setChecklistValue(e.target.value)}
                                    fullWidth id="outlined-basic"
                                    variant="outlined"
                                    placeholder='Add an item'
                                 />
                                 <div className="add-close-btn">
                                    <Button onClick={handleChecklistAddBtn} variant='contained' size='small'>Add</Button>
                                    <CloseIcon onClick={handleCloseAddChecklistButtton} />
                                 </div>
                              </div>
                        }
                     </>
               }
            </div>
         </div>

         <div className="dialogue-sidebar">
            <h2>Add to card</h2>
            <div className="sidebar-lists">
               <a href="#" onClick={handleLabelOpen}>
                  <span><SellIcon className='icon-size' /></span>
                  <span>Labels</span>
               </a>
               <a href="#" onClick={handleChecklistOpen}>
                  <span><LibraryAddCheckOutlinedIcon className='icon-size' /></span>
                  <span>Checklist</span>
               </a>
               <a href="#" onClick={handleDateOpen}>
                  <span><AccessTimeOutlinedIcon className='icon-size' /></span>
                  <span>Dates</span>
               </a>
            </div>
         </div>

         <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
         >
            <DialogActions>
               <CloseIcon onClick={handleClose} />
            </DialogActions>
            <DialogContent className='edit-dialog'>
               <LabelDetails card={card} onSave={handleClose} />
            </DialogContent>
         </Dialog>
      </div>
   )
}

export default CardDetails;
