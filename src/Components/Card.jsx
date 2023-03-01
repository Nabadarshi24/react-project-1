import React, { Fragment, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SubjectIcon from '@mui/icons-material/Subject';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardDetails from './CardDetails';
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Card(props) {
  const { card, cardlist } = props;
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('md');
  const [descriptionValue, setDescriptionValue] = useState('');

  const callBack = (descriptionValue) => {
    setDescriptionValue(descriptionValue);
  }

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
          <span>{card.labels}</span>
          <DeleteOutlinedIcon className='card-delete-icon' fontSize='15px' />
        </div>
        <div className="card-title">
          <span>{card.title}</span>
        </div>
        <div className="card-footer">
          <div className="due-date">
            <span><AccessTimeIcon className='font-size' /></span>
            <span>Feb 8, 2025</span>
          </div>
          {
            descriptionValue === ''
              ? null
              : <div className="description">
                <SubjectIcon className='font-size' />
              </div>
          }
          <div className="checklist-items">
            {
              !card.checklistTitle
                ? null
                : <>
                  <span><LibraryAddCheckOutlinedIcon className='font-size' /></span>
                  {/* <span>{card.checkedlistCount}/{card.checklists.length}</span> */}
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
