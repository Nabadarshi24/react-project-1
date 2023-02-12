import React, { Fragment } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import SubjectIcon from '@mui/icons-material/Subject';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Card() {
  return (
    <Fragment>
      <div className="card">
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
    </Fragment>
  )
}

export default Card;

