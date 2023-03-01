import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';

function LabelDetails(props) {
   const { card, onSave } = props;
   const [labels, setLabels] = useState(card.labels);
   console.log(labels);

   const labelItems = [
      {
         value: 'Copy Request',
         className: 'edit-copy',
         label: 'Copy Request'
      },
      {
         value: 'One More Step',
         className: 'edit-step',
         label: 'One More Step'
      },
      {
         value: 'Priority',
         className: 'edit-priority',
         label: 'Priority'
      },
      {
         value: 'Design Team',
         className: 'edit-design',
         label: 'Design Team'
      },
      {
         value: 'Product Marketing',
         className: 'edit-product',
         label: 'Product Marketing'
      },
      {
         value: 'Trello Tip',
         className: 'edit-trello',
         label: 'Trello Tip'
      },
      {
         value: 'Help',
         className: 'edit-help',
         label: 'Help'
      }
   ]

   const getLabelValue = (e) => {
      const { value, checked } = e.target;
      const index = labels.indexOf(value);
      console.log(value, checked)
      let newLabels = [];
      if (index === -1) {
         newLabels = [...labels, value];
      }
      else {
         newLabels = labels.filter((label) => label !== value)

         // let newNewLabel = []
         // function fi(labels) {
         //    for (let index = 0; index < labels.length; index++) {
         //       const label = labels[index];

         //       if(label !== value){
         //          newNewLabel.push(label);
         //       }

         //    }            
         // }
      }

      setLabels(newLabels);
      card.labels = newLabels;
   }

   return (
      <div className='label-details'>
         <div className="label-title">
            <span>Labels</span>
         </div>
         <div className="label-body">
            <FormGroup className='user-form'>
               {
                  labelItems.map((labelItem, index) => (
                     <FormControlLabel
                        key={index}
                        control={<Checkbox checked={labels.includes(labelItem.value)} onChange={(e) => getLabelValue(e)} />}
                        value={labelItem.value}
                        label={<><CircleIcon /> {labelItem.label}</>}
                        className={labelItem.className}
                     />
                  ))
               }

            </FormGroup>
            <Button className='save-btn' variant='contained' size='small' onClick={onSave}>Save</Button>
         </div>
      </div>
   )
}

export default LabelDetails