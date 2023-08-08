import TopBar from './topbar/TopBar';
import './App.css';
import Views from './Cars/Views/Views';
import Ghar from './Page/Ghar/Ghar';
import Police from './police/carpol/Police';
function App() {
  return (
    <div>
    <TopBar />
    <Views />
    <Ghar />
    <Police />
    </div>
  );
}

export default App;
