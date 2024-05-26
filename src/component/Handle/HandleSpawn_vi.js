import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import monster from '../data/vi/Battle Stages.json';
import monster2 from '../data/vi/NPC Monsters (Spawnable).json';
import './handleLightcones.css';

function HandleSpawn_vi() {
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
          <h2>Triệu Hồi</h2>
        </div>
      </div>
      <br />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%' }} />
        <div className="lightcones-content">
          <div style={{ display: 'flex' }}>
            <p className="name-of-selection">Tên Kẻ Địch: </p>
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
            <p className="name-of-selection">Số Lượng: </p>
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              className="LevelInput"
            />
          </div>
          <br />
          <h2 className="final-command">Lệnh</h2>
          {selectedOption && (
            <input
              type="text"
              value={`/spawn 2004021 s${selectedOption.value} lv${level} x${quantity}`}
              readOnly
              ref={inputRef3}
              className="copied-command"
              onClick={handleInputClick3}
            />
          )}
          <br/>
          <p className='spawn-function'>* Thông báo:<br/>
          Trước khi sử dụng, hãy đảm bảo bản thân đang đứng không phải ở Khu Vực An Toàn.<br/>
          Trong trường hợp bạn không rõ bản thân có đang đứng ở Khu Vực An Toàn hay không, hãy sử dụng lệnh sau rồi mới thực hiện lệnh Spawn bên trên:
          </p>
          <h2 className="spawn-function-cmd"> /scene 20101  </h2><br/>
          <p className='spawn-function'>Về việc Mục Tiêu Kẻ Địch được gọi ra là "<span className='monster-name'>Trung Úy Vân Kỵ - Yanqing (Hoàn Chỉnh)</span>"<br/>
          Để đảm bảo việc Mục Tiêu Kẻ Địch được gọi ra thuộc NPC Monster có thể triệu hồi nên đã thay đổi Kẻ Địch được triệu hồi thành như vậy. <br/>
          Bạn chỉ cần tấn công "<span className='monster-name'>Trung Úy Vân Kỵ - Yanqing (Hoàn Chỉnh)</span>" thì Kẻ Địch bạn chọn sẽ được thay thế trong trận đấu !
          </p>
        </div>
      </div>
    </>
  );
}

export default HandleSpawn_vi;
