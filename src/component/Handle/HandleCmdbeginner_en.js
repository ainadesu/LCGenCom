import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cmdbeginner.css'

function HandleCmdbeginner_en() {
  const [selectedButton, setSelectedButton] = useState('');
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
    }
  };
  
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonNameMapping[buttonName] || buttonName);
    setShowInput(false); // Ẩn ô input number khi chọn nút mới
  };



  const buttonNameMapping = {
    '10': '/giveall materials',
    '1' : '/setlevel 70',
    '2' : '/worldlevel 6',
    '3': '/giveall avatars lv80 r6 s10',
    '4': '/giveall lightcones lv80 r5',
    '5': '/give 1 x1000000',
    '6':'/give 3 x1000000',
    '7': '/give 101 x1000000',
    '8': '/give 102 x1000000',
    '9': '/give 2 x1000000',
    '11': '/giveall usables',
    '12': '/avatar all lv80 r6 s10',
    '13': '/avatar lineup lv80 r6 s10',
    '14': '/avatar cur lv80 r6 s10',
    '15': '/clear relics lv15',
    '16': '/energy',
    '17': '/gender female',
    '18': '/heal',
    '19': '/refill'
  };

  return (
    <div>
      {/* <h2 style={{fontWeight:'bold',  justifyContent: 'center' }}>Mô Tả</h2> */}
      <p style={{color: 'white'}}>This is the first time using Private Server? These are some pre-written commands that will help you setup your beginning much faster.</p>

      <div className="button-container">
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('1')}>Trailblazer Level Up to Lv.70</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('2')}>World Level Up to Lv.6</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('3')}>Get All Characters with Lv.80, Eidolon 6, Max Talent</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('4')}>Get All Lightcones with Lv.80, Rank 5</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('5')}>Get 1.000.000 Stella Jade</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('6')}>Get 1.000.000 Oneiric Shard</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('7')}>Get 1.000.000 Star Rail Pass</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('8')}>Get 1.000.000 Star Rail Special Pass</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('9')}>Get 1.000.000 Credit</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('10')}>Get All Materials</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('11')}>Get All Usables</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('12')}>All Existing Characters Up To Lv.80, Max Talent, Eidolon 6</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('13')}>4 Characters In Lineup Up To Lv.80, Max Talent, Eidolon 6</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('14')}>On-field Character Up to Lv.80, Max Talent, Eidolon 6</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('15')}>Clear All +15 Relics Unequipped</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('16')}>Restores 100% Energy for Lineup Characters</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('17')}>I Want To Switch My Gender !</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('18')}>HEAL !!! I NEED HEALL !!!</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('19')}>I Need More Technique Points</button>
      </div>
        <br/>
        <div className="selected-button">
        <p>
          <h2 style={{fontWeight: 'bold', color: 'white'}}>Command</h2>
          
        </p>
        
        <input type="text" value={selectedButton} readOnly ref={inputRef} 
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '300px',
            boxSizing: 'border-box',
            padding: '6px 12px'
          }} onClick={handleInputClick} />
      </div>
    </div>
  );
}

export default HandleCmdbeginner_en;
