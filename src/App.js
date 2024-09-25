import RouterController  from './router/RouterController';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { Suspense } from 'react';
import './App.css';
import { MainProvider } from './redux/provider';

function App() {

  return (
    <div className="App">
        <MainProvider>
          <RouterController />
        </MainProvider>
    </div>
  );
}

export default App;