import { Header } from './components/Header/Header';
import { UpcomingEvents } from './components/UpcomingEvents/UpcomingEvents';
import { FeaturedPerformance } from './components/FeaturedPerformance/FeaturedPerformance';
import './styles/global.css';

function App() {
  return (
    <div className="container">
      <Header />
      <UpcomingEvents />
      <FeaturedPerformance />
    </div>
  );
}

export default App;
