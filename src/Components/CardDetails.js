import React from 'react';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TextField from '@mui/material/TextField';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import SubjectIcon from '@mui/icons-material/Subject';
import SellIcon from '@mui/icons-material/Sell';

function CardDetails() {
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
                  <Button variant="outlined" className='label-btn' size="small">+</Button>
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
      </div>
   )
}

export default CardDetails;
