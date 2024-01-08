// GameList.js
import { Routes, Route } from 'react-router-dom';
import RPGContent from './RPGContent';
import FPSContent from './FPSContent';
import PlatformContent from './PlatformContent';
import SportContent from './SportContent';
import HistoricContent from './HistoricContent';


function GameList() {
  return (
    <div>
      <Routes>
        <Route index element={<RPGContent />} />
        <Route path="rpg" element={<RPGContent />} />
        <Route path="fps" element={<FPSContent />} />
        <Route path="platform" element={<PlatformContent />} />
        <Route path="sport" element={<SportContent />} />
        <Route path="historic" element={<HistoricContent />} />
      </Routes>
    </div>
  );
}

export default GameList;