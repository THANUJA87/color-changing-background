import { useState } from 'react'
import './App.css'




const App = () => {
  const [bgColor, setBgColor] = useState('white');
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple','Black','Brown','Skyblue','pink','Cyan', 'Magenta', 'Lime', 'Pink', 'Teal', 'Maroon',
      'Navy', 'Olive','Gray', 'White','#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF','#16A085', '#27AE60', '#2980B9'];


  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: bgColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
 
      <h2 style={{ marginBottom: '50px', textAlign: 'center', fontSize: '2rem', color:'white' }}>
        Choose a Color
      </h2>

    
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
          gap: '35px',
          width: '60%', 
          maxWidth: '600px',
        }}
      >
        {colors.map((color) => (
          <button
            key={color}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              border: 'none',
              cursor: 'pointer',
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
            onClick={() => setBgColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

