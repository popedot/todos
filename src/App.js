import { useState } from 'react';

import classes from './App.module.scss';
import Sidebar from './components/layout/Sidebar';
import Content from './components/layout/Content';

function App() {
  const [sidebarIsOpen, setIsOpenSlidebar] = useState(false);

  return (
    <div className={classes.window}>
      <Sidebar onSidebar={setIsOpenSlidebar} sidebarIsOpen={sidebarIsOpen}/>
      <Content onContent={setIsOpenSlidebar} sidebarIsOpen={sidebarIsOpen}/>
    </div>
  );
}

export default App;
