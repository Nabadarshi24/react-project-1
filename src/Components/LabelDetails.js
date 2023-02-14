import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';

function LabelDetails(props) {
   const {onSave} = props;
   return (
      <div className='label-details'>
         <div className="label-title">
            <span>Labels</span>
         </div>
         <div className="label-body">
            <FormGroup className='user-form'>
               <FormControlLabel control={<Checkbox />} label={<><CircleIcon /> Copy Request</>} className='edit-copy' />
               <FormControlLabel control={<Checkbox />} label={<><CircleIcon /> One More Step</>} className='edit-step' />
               <FormControlLabel control={<Checkbox />} label={<><CircleIcon /> Priority</>} className='edit-priority' />
               <FormControlLabel control={<Checkbox />} label={<><CircleIcon /> Design Team</>} className='edit-design' />
               <FormControlLabel control={<Checkbox />} label={<><CircleIcon /> Product Marketing</>} className='edit-product' />
               <FormControlLabel control={<Checkbox />} label={<><CircleIcon /> Trello Tip</>} className='edit-trello' />
               <FormControlLabel control={<Checkbox />} label={<><CircleIcon /> Help</>} className='edit-help' />
            </FormGroup>
            <Button className='save-btn' variant='contained' size='small' onClick={onSave}>Save</Button>
         </div>
      </div>
   )
}

export default LabelDetails
