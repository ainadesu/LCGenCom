import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cmdbeginner.css'

function HandleCmdbeginner_vi() {
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
    '4': '/giveall lighcones lv80 r5',
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
      <p style={{color: 'white'}}>Bạn là người mới sử dụng Máy Chủ Private lần đầu? Đây là một số lệnh cơ bản để bạn có thể dùng để setup khởi đầu của mình trong máy chủ này.</p>

      <div className="button-container">
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('1')}>Nâng Cấp Khai Phá Lên 70</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('2')}>Nâng Cấp Thế Giới Lên 6</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('3')}>Nhận Toàn Bộ Nhân Vật với Lv.80, Tinh Hồn 6 và Nâng Cấp Tối Đa Toàn Bộ Thiên Phú</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('4')}>Nhận Toàn Bộ Nón Ánh Sáng với Lv.80, Tích Tầng Bậc 5</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('5')}>Nhận 1.000.000 Ngọc Ánh Sao</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('6')}>Nhận 1.000.000 Mộng Ước Viễn Cổ</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('7')}>Nhận 1.000.000 Vé Tinh Cầu</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('8')}>Nhận 1.000.000 Vé Tinh Cầu Đặc Biệt</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('9')}>Nhận 1.000.000 Điểm Tín Dụng</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('10')}>Nhận Toàn Bộ Nguyên Liệu</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('11')}>Nhận Toàn Bộ Khung Chat và Ảnh Nền Điện Thoại</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('12')}>Tất Cả Nhân Vật Hiện Có Lên Lv.80, Max Thiên Phú</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('13')}>4 Nhân Vật Ra Sân Lên Lv.80, Max Thiên Phú</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('14')}>Nhân Vật Ra Sân Lên Lv.80, Max Thiên Phú</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('15')}>Xóa Toàn Bộ Di Vật +15 Chưa Được Trang Bị</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('16')}>Hồi 100% Năng Lượng Cho 4 Nhân Vật Ra Sân</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('17')}>Tôi Muốn Gặp Bản Thân Ở Giới Tính Khác !</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('18')}>HEAL !!! I NEED HEALL !!!</button>
        <button className='btn btn-success' style={{ margin: '10px' }} onClick={() => handleButtonClick('19')}>Acheron Của Tôi Cần Thêm Bí Kĩ</button>
      </div>
        <br/>
        <div className="selected-button">
        <p>
          <h2 style={{fontWeight: 'bold', color: 'white'}}>Lệnh</h2>
          
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

export default HandleCmdbeginner_vi;
