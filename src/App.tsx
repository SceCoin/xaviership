import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'


function App() {

  return (
    <div className="App">
      <header className="App-header">

        <h1>Button</h1>
        <Button >normal</Button>
        <Button disabled >disabled button</Button>

        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>small danger</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Hello</Button>

        <Button btnType={ButtonType.Link} href="https://www.baidu.com" >learn react</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>learn react</Button>

        <h1>Menu</h1>
        <Menu defaultIndex={0} onSelect={(index) => alert(index)} mode='vertical'>
          <MenuItem index={0} is-disabled={true} >cool link1</MenuItem>
          <MenuItem index={1} disabled>cool link2</MenuItem>
          <MenuItem index={2}>cool link3</MenuItem>
        </Menu>


      </header>
    </div>
  );
}

export default App;
