import React from 'react';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import './App.css';
import ColorBox from './components/ColorBox';
function App() {

  return (
    <div className="App">
      <h2 className="feature-title"> Todo Feature </h2>
       <TodoFeature/>
       <h2 className="feature-title"> Album Feature </h2>
       <AlbumFeature/>

       <ColorBox/>
    </div>
  );
}


export default App;
