import './App.css';
import {RouterProvider} from "react-router-dom";
import Router from '../routes/router';
import ContextStructure from '../context/contextSettings';

function App() {
  return (
    <div className="App" onContextMenu={e => e.preventDefault()}>
      <ContextStructure>
        <RouterProvider router={Router} />
      </ContextStructure>
    </div>
  );
}

export default App;
