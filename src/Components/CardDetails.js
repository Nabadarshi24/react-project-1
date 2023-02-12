import React from 'react';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TextField from '@mui/material/TextField';

function CardDetails() {
   return (
      <div className='card-details'>
         <div className="card-details-header">
            <span><LaptopMacIcon className='dialogue-icon-size' /></span>
            <div className="window-title">
               {/* <h2>Card</h2> */}
               <TextField fullWidth className='' variant="outlined" />
            </div>
         </div>
      </div>
   )
}

export default CardDetails;
