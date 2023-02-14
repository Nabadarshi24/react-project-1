import React, { Fragment, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircleIcon from '@mui/icons-material/Circle';
import SubjectIcon from '@mui/icons-material/Subject';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardDetails from './CardDetails';
import Button from '@mui/material/Button';

function Card() {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('md');

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
          <span><CircleIcon fontSize='0.7rem' /> One more step</span>
          <span><CircleIcon fontSize='0.7rem' /> Product marketing</span>
        </div>
        <div className="card-title">
          <span>New card</span>
        </div>
        <div className="card-footer">
          <div className="due-date">
            <span><AccessTimeIcon className='font-size' /></span>
            <span>Feb 8, 2025</span>
          </div>
          <div className="description">
            <SubjectIcon className='font-size' />
          </div>
          <div className="checklist-items">
            <span><LibraryAddCheckIcon className='font-size' /></span>
            <span>0/4</span>
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
          <CardDetails />
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}

export default Card;

