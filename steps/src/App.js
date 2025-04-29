import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {
  // Use state here ..
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);


  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }

  }

  return (
    <>
      <button className="close" onClick={() => { setisOpen((is) => !is) }}>&times;</button>
      {isOpen && (
        <div className="steps">

          <div className='numbers'>
            <div className={step === 1 ? 'active' : undefined}>1</div>
            <div className={step === 2 ? 'active' : undefined}>2</div>
            <div className={step === 3 ? 'active' : undefined}>3</div>
          </div>

          <p className='message'>Step {step}: {messages[step - 1]}</p>

          <div className='buttons'>
            <button onClick={handlePrevious} style={{ backgroundColor: '#7950f2', color: 'white' }}>Previous</button>
            <button onClick={handleNext} style={{ backgroundColor: '#7950f2', color: 'white' }}>Next</button>
          </div>

        </div>
      )}
    </>

  );
}

export default App;
