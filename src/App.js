import './App.css';
import ProgressBar from './component/ProgressBar';
import { useEffect, useState } from 'react';
import Switch from './component/Switch';

function App() {
  const [progress, setProgress] = useState(0);
  const [color,setcolor] =useState('white');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress === 100) {
        clearInterval(intervalId);
      } else {
        setProgress((val) => val + 1);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, [progress]);
  const handelColor = (arg) =>{
    setcolor(
      arg  ? 'white': 'black'
    )
    // console.log(color);
  }
  const mode={
    backgroundColor:`${color}`
  }
  const refe =(arg)=>{
    setProgress(arg)
    // console.log(arg);
  }


  return (
    <div className='flex flex-col items-center h-screen' style={mode}>
      <Switch code={handelColor}></Switch>
      <div className='w-1/2'>
        <ProgressBar val={progress} them={color} refe={refe}></ProgressBar>
      </div>
    </div>
  );
}

export default App;
