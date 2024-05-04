import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import items from '../data/vi/Items.json'
import './handleLightcones.css'

function HandleItems_vi () {

  const [selectedOption, setSelectedOption] = useState(items[0]);
  const [level, setLevel] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [rank, setRank] = useState(1);
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleLevelChange = (value) => {
    let newValue = parseInt(value);
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    } else if (newValue > 80) {
      newValue = 80;
    }
    setLevel(newValue);
  };

  const handleQuantityChange = (value) => {
    let newValue = parseInt(value);
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    } 
    setQuantity(newValue);
  };

  const handleRankChange = (value) => {
    let newValue = parseInt(value);
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    } else if (newValue > 5) {
      newValue = 5;
    }
    setRank(newValue);
  };
  const inputRef3 = useRef(null);
  const handleInputClick3 = () => {
    if (inputRef3.current) {
      inputRef3.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <>
      <div className='title'>
        <div>
          <h2>Vật Phẩm</h2>
        </div>
      </div>
      <br/>
      <div style={{display: 'flex'}}>
      <div style={{width: '20%'}}/>
      <div className='lightcones-content'>
      <div style={{display: 'flex'}}>
          <p className='name-of-selection'>Tên Vật Phẩm: </p>
          <Select className='select'
            value={selectedOption}
            onChange={handleSelectChange}
            options={items.map(items => ({ value: items.id, label: items.name }))}
            placeholder="Chọn một Scene"
          />
      </div><br/>
      {/* <div style={{display: 'flex'}}>
          <p className='name-of-selection'>Level: </p>
          <input
            type="number"
            value={level}
            onChange={(e) => handleLevelChange(e.target.value)}
            min={1}
            max={80}
            className='LevelInput'
          />
      </div><br/>
      <div style={{display: 'flex'}}>
          <p className='name-of-selection'>Tích Tầng: </p>
          <input
            type="number"
            value={rank}
            onChange={(e) => handleRankChange(e.target.value)}
            min={1}
            max={5}
            className='LevelInput'
          />
      </div><br/> */}
      <div style={{display: 'flex'}}>
          <p className='name-of-selection'>Số Lượng: </p>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
            className='LevelInput'
          />
      </div><br/>
      <h2 className='final-command'>Lệnh</h2>
      {selectedOption && (
        <input 
          type="text"
          value={`/give ${selectedOption.value} x${quantity}`}
          readOnly
          ref={inputRef3}
          className='copied-command'
          
          onClick={handleInputClick3}
        />
      )}
      </div>
      </div>
      
      
    </>
    
  )
}

export default HandleItems_vi