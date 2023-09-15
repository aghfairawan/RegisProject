import { useState } from 'react'
import { Button } from "antd"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FormUser, AccountInformation } from './containers';
import './App.css'
import AddressInformation from './containers/AddressInformation/inex';



const App = () => {

  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if(step === 1 || step === 2) {
        setStep((prevStep) => prevStep+1);
    }

    return
}

const handlePrev = () => {
    if(step === 2 || step === 3) {
        setStep((prevStep) => prevStep - 1);
    }

    return
}
    

  return (
  
    <>
      {step === 1 && (
        <FormUser />
      )}
      {step === 2 && (
        <AddressInformation />
      )}
      {step === 3 &&(
        <AccountInformation/>
      )}

      <div>
        {step === 1 && (
          <Button type={'primary'} onClick={handleNext}>Berikutnya</Button>
        )}
        
        {step === 2 && (
          <Button onClick={handlePrev}>Kembali</Button>
        )}
        {step === 2 && (
          <Button type={'primary'} onClick={handleNext}>Berikutnya</Button>
        )}
        {step === 3 && (
          <Button onClick={handlePrev}>Kembali</Button>
        )}
      </div>
    </>
  )

}

export default App
