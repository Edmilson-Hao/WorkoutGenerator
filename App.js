import React from 'react';
import './components/style/App.css'
import _header from './components/_header'
import _divBody from './components/_divBody'
import _divGeneratedWorkout from './components/_divGeneratedWorkout'


function App() {

  window.addEventListener('change', (event) => {
    let splitChoice = document.getElementById('workoutSplitSelector').value;
    switch (splitChoice) {
      case 'fullBodySplit':
        document.getElementById('fullBodySplitDay').style.display = 'block';
        document.getElementById('upperLowerSplitDay').style.display = 'none';
        document.getElementById('pushPullLegsSplitDay').style.display = 'none';

      break;

      case 'upperLowerSplit':
        document.getElementById('fullBodySplitDay').style.display = 'none';
        document.getElementById('upperLowerSplitDay').style.display = 'block';
        document.getElementById('pushPullLegsSplitDay').style.display = 'none';

      break;

      case 'pushPullLegsSplit':
        document.getElementById('fullBodySplitDay').style.display = 'none';
        document.getElementById('upperLowerSplitDay').style.display = 'none';
        document.getElementById('pushPullLegsSplitDay').style.display = 'block';

      break;

      default:

    }
  });

  return (
    <div className="App">
       <_header />
       <_divBody />
       <_divGeneratedWorkout />
    </div>
  );
}

export default App;