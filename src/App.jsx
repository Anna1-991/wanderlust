import React, { useEffect, useState } from 'react';
import './index.css';
import { Main } from './Components/Main/Main';
import Lottie from 'react-lottie';
import Animation from './Lottie/Animation.json'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
      <div>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Lottie options={{
              animationData: Animation,
              loop: true,
              autoplay: true,
            }}/>
          </div>
          ) : (
          <div>
            <Main />
          </div>
        )}
        
        
      </div>
  );
}

export default App;
