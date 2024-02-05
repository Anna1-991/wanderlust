import React, { useEffect, useState } from 'react';
import './index.css';
import { Main } from './Components/Main/Main';
import Lottie from 'react-lottie';
import Animation from './Animation'

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
          <Lottie options={{
            animationData: Animation,
            loop: true,
            autoplay: true,
          }}/>
        ) : (
          <div>
            <Main />
          </div>
        )}
        
        
      </div>
  );
}

export default App;
