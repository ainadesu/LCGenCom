// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home_en from './component/home_en';
import Home_vi from './component/home_vi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home_chs from './component/home_chs';
import ShowCmdbeginner_vi from './component/Cmdbeginner_langVI';
import ShowLightcones_vi from './component/Lightcones_langVI';
import ShowAvatars_vi from './component/Avatars_langVI';
import ShowItems_vi from './component/Items_langVI';
import ShowScene_vi from './component/Scene_langVI';
import ShowSpawn_vi from './component/Spawn_langVI';
import ShowRelics_vi from './component/Relics_langVI';
import ShowLightcones_en from './component/Lightcones_langEN';
import ShowCmdbeginner_en from './component/Cmdbeginner_langEN';
import ShowAvatars_en from './component/Avatars_langEN';
import ShowItems_en from './component/Items_langEN';
import ShowScene_en from './component/Scene_langEN';
import ShowSpawn_en from './component/Spawn_langEN';
import ShowRelics_en from './component/Relics_langEN';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<ShowCmdbeginner_en />} />
      <Route path="/lang=en" element={<ShowCmdbeginner_en />} />
      <Route path="/lang=vi" element={<ShowCmdbeginner_vi />} />
      <Route path="/lang=chs" element={<Home_chs />} />
      <Route path="/lang=vi/lightcones" element={<ShowLightcones_vi />} />
      <Route path="/lang=vi/cmdbeginner" element={<ShowCmdbeginner_vi />} />
      <Route path="/lang=vi/avatars" element={<ShowAvatars_vi />} />
      <Route path="/lang=vi/items" element={<ShowItems_vi />} />
      <Route path="/lang=vi/scene" element={<ShowScene_vi />} />
      <Route path="/lang=vi/spawn" element={<ShowSpawn_vi />} />
      <Route path="/lang=vi/relics" element={<ShowRelics_vi />} />
      <Route path="/lang=en/lightcones" element={<ShowLightcones_en />} />
      <Route path="/lang=en/cmdbeginner" element={<ShowCmdbeginner_en />} />
      <Route path="/lang=en/avatars" element={<ShowAvatars_en />} />
      <Route path="/lang=en/items" element={<ShowItems_en />} />
      <Route path="/lang=en/scene" element={<ShowScene_en />} />
      <Route path="/lang=en/spawn" element={<ShowSpawn_en />} />
      <Route path="/lang=en/relics" element={<ShowRelics_en />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
