import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './home.css';
import lcversion from './data/version.txt';

function Home_chs() {
  const [version, setVersion] = useState('');

  useEffect(() => {
    // Đọc nội dung từ tệp version.txt khi component được tạo ra
    fetch(lcversion)
      .then(response => response.text())
      .then(data => setVersion(data))
      .catch(error => console.error('Error fetching version:', error));
  }, []);

  const languageOptions = [
    { value: '简体中文', label: '简体中文 (CHS)' },
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
            window.location.href = '/lang=vi';
            break;
        case '简体中文':
            window.location.href = '/lang=chs';
            break
        default:
            window.location.href = '/lang=en';
      }
    // Thực hiện các xử lý khác ở đây nếu cần
  };

  return (
    <div className="homepage">
      <Container>
        <div style={{display: 'flex'}}>
          <h3 className='title'>LC Tools</h3>
          <p className='title-right'>版本: {version}</p>
        </div>
        <hr/>
        <div>
            <div className='true-slidebar'>
            <div className='slidebar-home'>
                <p className='slidebar'>特征</p>
                <p className='slidebar-option'>初学者命令</p>
                <p className='slidebar-option'>光锥</p>
                <p className='slidebar-option'>人物</p>
                <p className='slidebar-option'>物品</p>
                <p className='slidebar-option'>场景</p>
                <p className='slidebar-option'>怪物</p>
                <p className='slidebar-option'>遗器</p>
                <hr/>
                <p className='slidebar'>语言</p>
                <Select
                options={languageOptions}
                onChange={handleChange}
                isSearchable={false}
                />
            </div>
            </div>
        </div>
        
      </Container>
    </div>
  );
}

export default Home_chs;
