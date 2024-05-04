import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './home.css';
import lcversion from './data/version.txt';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HandleLightcones_vi from './Handle/HandleLightcones_vi';


function ShowLightcones_vi() {
    const location = useLocation();
    const [version, setVersion] = useState('');

  useEffect(() => {
    // Đọc nội dung từ tệp version.txt khi component được tạo ra
    fetch(lcversion)
      .then(response => response.text())
      .then(data => setVersion(data))
      .catch(error => console.error('Error fetching version:', error));
  }, []);



//   const currentComponent = getComponentByPath(location.pathname);

  const languageOptions = [
    // { value: '简体中文', label: '简体中文 (CHS)' },
    // { value: '繁體中文', label: '繁體中文 (CHT)' },
    // { value: 'Deutsch', label: 'Deutsch (DE)' },
    { value: 'English', label: 'English (EN)' },
    // { value: 'Español', label: 'Español (ES)' },
    // { value: 'Français', label: 'Français (FR)' },
    // { value: 'Bahasa Indonesia', label: 'Bahasa Indonesia (ID)' },
    // { value: '日本語', label: '日本語 (JA)' },
    // { value: '한국어', label: '한국어 (KO)' },
    // { value: 'Português', label: 'Português (PT)' },
    // { value: 'Русский язык', label: 'Русский язык (RU)' },
    // { value: 'ภาษาไทย', label: 'ภาษาไทย (TH)' },
    { value: 'Tiếng Việt', label: 'Tiếng Việt (VI)' },
  ];

  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    switch (selectedOption.value) {
        case 'Tiếng Việt':
            window.location.href = '/lang=vi/lightcones';
            break;
        case '简体中文':
            window.location.href = '/lang=chs';
            break
        default:
            window.location.href = '/lang=en/lightcones';
      }
    // Thực hiện các xử lý khác ở đây nếu cần
  };

  return (
    <div className="homepage">
      <Container>
        <div style={{display: 'flex'}}>
          <h3 className='title'>LC Tools</h3>
          <p className='title-right'>Phiên Bản: {version}</p>
        </div>
        <hr/>
        <div style={{display: 'flex'}}>
            <div className='true-slidebar'>
                <div className='slidebar-home'>
                <p className='slidebar'>Chức Năng</p>
                    <p className='slidebar-option'>
                        <Link to="/lang=vi/cmdbeginner" className='slidebar-link'>Lệnh Cho Người Dùng Mới</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=vi/lightcones" className='slidebar-link-on'>Nón Ánh Sáng</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=vi/avatars" className='slidebar-link'>Nhân Vật</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=vi/items" className='slidebar-link'>Vật Phẩm</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=vi/scene" className='slidebar-link'>Cảnh</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=vi/spawn" className='slidebar-link'>Triệu Hồi</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=vi/relics" className='slidebar-link'>Di Vật</Link>
                    </p>
                    <hr/>
                    <p className='slidebar'>Ngôn Ngữ</p>
                    <Select
                    options={languageOptions}
                    onChange={handleChange}
                    isSearchable={false}
                    />
                </div>
            </div>
            <div className='main-content'>
                <HandleLightcones_vi/>
            </div>
        </div>
        
      </Container>
    </div>
  );
}

export default ShowLightcones_vi;
