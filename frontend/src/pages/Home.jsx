import React, { useEffect, useState } from 'react';

const Home = () => {
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const scripts = [];

    // Helper function to load scripts with error handling
    const loadScript = (src, onLoad) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';

        script.onload = () => {
          console.log(`Loaded: ${src}`);
          if (onLoad) onLoad();
          resolve(script);
        };

        script.onerror = () => {
          console.error(`Failed to load: ${src}`);
          reject(new Error(`Failed to load script: ${src}`));
        };

        document.head.appendChild(script);
        scripts.push(script);
      });
    };

    // Load scripts in sequence
    const loadAllScripts = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js');
        await loadScript('/songs.js');
        await loadScript('/script.js');
      } catch (error) {
        console.error('Script loading error:', error);
        setLoadError(error.message);
      }
    };

    loadAllScripts();

    return () => {
      // Clean up the scripts when the component unmounts
      scripts.forEach(script => {
        try {
          if (script && script.parentNode) {
            document.head.removeChild(script);
          }
        } catch (e) {
          console.error('Error removing script:', e);
        }
      });
    };
  }, []);

  if (loadError) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2>Error Loading Game</h2>
        <p>{loadError}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4299e1',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div>
      <canvas id="myCanvas" width="1200" height="400" resize="true" style={{ width: '100%', height: '100vh' }} ></canvas>
      <audio id="sound1" src="sounds/PinkPanther30.wav"></audio>
    </div>
  );
}

export default Home;
