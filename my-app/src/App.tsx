import { useState } from 'react';
import './App.css';
import { AddClockInput, stateT } from './components/AddClockInput/AddClockInput';
import { MainContainer } from './components/MainContainer';
import { ResultField } from './components/ResultField/ResultField';


function App() {
  const [state, setState] = useState<stateT[]>([])

  const funcClbk = (obj : stateT) => {
    if(obj !== undefined) {
      setState(prev => [...prev, obj])
    }
  }

  const arrClbk = (arr: stateT[]) => {
    setState(arr);
  }

  return (
    <MainContainer>
      <AddClockInput propClbk={funcClbk}/>
      <ResultField propArr={state} propClbk={arrClbk}/>
    </MainContainer>
  );
}

export default App;
