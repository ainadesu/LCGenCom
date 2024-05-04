import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import monster from '../data/en/Battle Stages.json';
import monster2 from '../data/en/NPC Monsters (Spawnable).json';
import './handleLightcones.css';

function HandleSpawn_en() {
  const [selectedOption, setSelectedOption] = useState(monster[0]);
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

  // Hàm tìm ID của đơn vị trong monster2 có tên trùng với tên monster đã chọn
  const findMonster2ID = (monsterName) => {
    const foundMonster = monster2.find((m) => m.name === monsterName);
    return foundMonster ? foundMonster.id : '';
  };

  return (
    <>
      <div className="title">
        <div>
          <h2>Spawn</h2>
        </div>
      </div>
      <br />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%' }} />
        <div className="lightcones-content">
          <div style={{ display: 'flex' }}>
            <p className="name-of-selection">Name: </p>
            <Select
              className="select"
              value={selectedOption}
              onChange={handleSelectChange}
              options={monster.map((monster) => ({ value: monster.id, label: monster.name }))}
              placeholder="Chọn một Scene"
            />
          </div>
          <br />
          <div style={{ display: 'flex' }}>
            <p className="name-of-selection">Level: </p>
            <input
              type="number"
              value={level}
              onChange={(e) => handleLevelChange(e.target.value)}
              min={1}
              max={80}
              className="LevelInput"
            />
          </div>
          <br />
          <div style={{ display: 'flex' }}>
            <p className="name-of-selection">Quantity: </p>
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              className="LevelInput"
            />
          </div>
          <br />
          <h2 className="final-command">Command</h2>
          {selectedOption && (
            <input
              type="text"
              value={`/spawn 2004021 ${selectedOption.value} lv${level} x${quantity}`}
              readOnly
              ref={inputRef3}
              className="copied-command"
              onClick={handleInputClick3}
            />
          )}
          <br/>
          <p className='spawn-function'>* Notice:<br/>
          Before using, make sure you are not in the Safe Zone.<br/>
          In case you are not sure whether you are standing in the Safe Zone or not, use the following command and then execute the Spawn command above.:
          </p>
          <h2 className="spawn-function-cmd"> /scene 20101  </h2><br/>
          <p className='spawn-function'>The Enemy Target being spawned is "<span className='monster-name'>Cloud Knight Lieutenant: Yanqing (Complete)</span>"<br/>
          To ensure that the summoned Enemy Target belongs to the summonable NPC Monster, the Summoned Enemy has been changed to be like that. <br/>
          You just need to attack "<span className='monster-name'>Cloud Knight Lieutenant: Yanqing (Complete)</span>" and the Enemy you choose will be replaced in the battle!
          </p>
        </div>
      </div>
    </>
  );
}

export default HandleSpawn_en;
