import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';

function LabelDetails(props) {
   const { card, onSave } = props;
   const [labels, setLabels] = useState(card.labels);

   const getLabelValue = (e) => {
      const { value, checked } = e.target;
      console.log(value)
      if (checked) {
         setLabels([...labels, value]);
      }
      else {
         setLabels(labels.filter((e) => e !== value));
      }
   }
   return (
      <div className='label-details'>
         <div className="label-title">
            <span>Labels</span>
         </div>
         <div className="label-body">
            <FormGroup className='user-form'>
               <FormControlLabel
                  control={<Checkbox />}
                  value='Copy Request'
                  label={<><CircleIcon /> Copy Request</>}
                  className='edit-copy'
                  onClick={(e) => getLabelValue(e)}
               />
               <FormControlLabel
                  control={<Checkbox />}
                  value={<><CircleIcon /> One More Step</>}
                  label={<><CircleIcon /> One More Step</>}
                  className='edit-step'
                  onChange={(e) => getLabelValue(e)}
               />
               <FormControlLabel
                  control={<Checkbox />}
                  value={<><CircleIcon /> Priority</>}
                  label={<><CircleIcon /> Priority</>}
                  className='edit-priority'
                  onChange={(e) => getLabelValue(e)}
               />
               <FormControlLabel
                  control={<Checkbox />}
                  value={<><CircleIcon /> Design Team</>}
                  label={<><CircleIcon /> Design Team</>}
                  className='edit-design'
                  onChange={(e) => getLabelValue(e)}
               />
               <FormControlLabel
                  control={<Checkbox />}
                  value={<><CircleIcon /> Product Marketing</>}
                  label={<><CircleIcon /> Product Marketing</>}
                  className='edit-product'
                  onChange={(e) => getLabelValue(e)}
               />
               <FormControlLabel
                  control={<Checkbox />}
                  value={<><CircleIcon /> Trello Tip</>}
                  label={<><CircleIcon /> Trello Tip</>}
                  className='edit-trello'
                  onChange={(e) => getLabelValue(e)}
               />
               <FormControlLabel
                  control={<Checkbox />}
                  value={<><CircleIcon /> Help</>}
                  label={<><CircleIcon /> Help</>}
                  className='edit-help'
                  onChange={(e) => getLabelValue(e)}
               />
            </FormGroup>
            <Button className='save-btn' variant='contained' size='small' onClick={onSave}>Save</Button>
         </div>
      </div>
   )
}

export default LabelDetails
