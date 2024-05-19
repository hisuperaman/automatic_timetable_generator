import './App.css';
import Body from './components/Body/Body';
import TopBar from './components/TopBar/TopBar'

function App() {
  return (
    <div className="App h-fill dark:bg-dark-primary bg-light-primary">

      <div className=''>
        <TopBar />
        <Body />
      </div>
      
    </div>
  );
}

export default App;
