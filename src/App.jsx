import { useTweed } from '@paytweed/core-react';
import './App.css';
import DemoPage from './DemoPage';

function App() {
  const { loading } = useTweed();

  if (loading)
    return (<> Loading</>);

  return (
    <>
      <DemoPage />
    </>
  );
}

export default App;
