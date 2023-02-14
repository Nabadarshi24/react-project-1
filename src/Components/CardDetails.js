import React from 'react';
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
import { useState } from 'react';
import LabelDetails from './LabelDetails';

function CardDetails() {
   const [open, setOpen] = useState(false);
   const [fullWidth, setFullWidth] = useState(true);
   const [maxWidth, setMaxWidth] = useState('xs');

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div className='card-details clearfix'>
         <div className="dialogue-details-header">
            <div className="dialogue-title">
               <span><LaptopMacIcon className='dialogue-icon-size' /></span>
               <div className="window-title">
                  <h2>Card</h2>
                  {/* <TextField fullWidth className='' variant="outlined" /> */}
               </div>
            </div>
            <div className="window-header-inline-content">
               <span>in list</span> <a href="#">Title</a>
            </div>
         </div>

         <div className="dialogue-main-col">
            <div className="label-date-container">
               <h3>Labels</h3>
               <div className="label-container">
                  <Button variant="outlined" className='label-btn' size="small" onClick={handleClickOpen}>+</Button>
               </div>
               <h3>Dates</h3>
               <div className="date-container">
                  <div className="date-container-btn">
                     <span className='margin-right'>Feb 14, 2024</span>
                     <span><EditIcon fontSize='15px' /></span>
                  </div>
               </div>
            </div>
            <div className="description">
               <div className="desc-title">
                  <span><SubjectIcon /></span>
                  <h3>Description</h3>
                  <Button size='small' variant='outlined' className='edit-desc'>Edit</Button>
               </div>
               <div className="desc-field">
                  <TextField fullWidth placeholder='Add a more detailed description...' />
                  <div className="hidden-desc">
                     <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        multiline
                        // rows={4}
                        minRows={8}
                        maxRows={10}
                        defaultValue="Default Value..."
                     // className='hidden-textfield'
                     />
                     <div className="hidden-desc-btn">
                        <span className='margin-right'><Button variant='contained' size='small'>Save</Button></span>
                        <Button varient='outlined' size='small'>Cancel</Button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="checklist">
               <div className="checklist-title">
                  <span><LibraryAddCheckOutlinedIcon /></span>
                  <h3>Checklist</h3>
                  <div className="edit-delete-btn">
                     <EditIcon />
                     <DeleteForeverIcon />
                  </div>
               </div>
               <div className="checklist-add-container">
                  <FormGroup>
                     <FormControlLabel control={<Checkbox />} label="Item 1" />
                     <FormControlLabel control={<Checkbox />} label="Item 2" />
                  </FormGroup>
               </div>
               <div className='checklist-title-edit'>
                  <TextField fullWidth id="outlined-basic" variant="outlined" placeholder='Add an item' />
                  <div className="add-close-btn">
                     <Button variant='contained' size='small'>Add</Button>
                     <CloseIcon />
                  </div>
               </div>
            </div>
         </div>

         <div className="dialogue-sidebar">
            <h2>Add to card</h2>
            <div className="sidebar-lists">
               <a href="#">
                  <span><SellIcon className='icon-size' /></span>
                  <span>Labels</span>
               </a>
               <a href="#">
                  <span><LibraryAddCheckOutlinedIcon className='icon-size' /></span>
                  <span>Checklist</span>
               </a>
               <a href="#">
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
               <LabelDetails onSave={handleClose} />
            </DialogContent>
         </Dialog>
      </div>
   )
}

export default CardDetails;
