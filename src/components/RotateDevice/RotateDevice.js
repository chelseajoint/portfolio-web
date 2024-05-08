import React from 'react';

import spin from './resources/spin.svg';

import './RotateDevice.scss';

const RotateDevice = () => {
  return (
      <div className='rotate-device'>
        <img src={spin} alt='spin icon' className='spin-icon'/>
        <h4>Gira el dispositivo</h4>
      </div>
  );
}

export default RotateDevice;
