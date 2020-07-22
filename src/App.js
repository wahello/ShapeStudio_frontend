import React,{useState} from 'react';
import {useThree} from 'react-three-fiber'
import './style.css'
import Drawer from '@material-ui/core/Drawer';

import Header from './Components/Header/Header'
import Viewer from './Components/Viewer'
import Sidebar from './Components/Sidebar/Sidebar'
import SceneManager from './Components/SceneManager'

const App=()=>{

  const [active,setActive] = useState(null)
  const [scene,setScene] = useState(useThree().scene)
  const [camera,setCamera] = useState(null)
  const [orbit,setOrbit] = useState(null)
  const [newShapes,setNewShapes] = useState([])

  return(
    <div id='app'>
      <Header 
      scene={scene}
      newShapes={newShapes}
      setNewShapes={setNewShapes}
      />
      <div className='horizontal'>
        <div className='vertical'>
          <div id='viewer'>
            <Viewer id='threejs' 
              active={active} 
              scene={scene}
              camera={camera} 
              orbit={orbit}
              newShapes={newShapes}
              setActive={setActive} 
              setCamera={setCamera} 
              setScene={setScene}
              setOrbit={setOrbit}
              setNewShapes={setNewShapes}/>
          </div>
          <div id='bottomBar'>
          SceneManager
          <SceneManager scene={scene} setActive={setActive}/>
          </div>
        </div>
        <Drawer id='drawer' variant="persistent" anchor={'right'} open={active?true:false} onClose={''}>
          <Sidebar active={active}/>
        </Drawer>
      </div>
    </div>
  )
}


export default App;
