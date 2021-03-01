import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/submenu';
import Icon from './components/Icon/icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

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
        <hr/>

        <h1>Menu</h1>
        <Menu defaultIndex={'0'} onSelect={(index) => alert(index)}>
          <MenuItem  is-disabled={true} >cool link1</MenuItem>
          <MenuItem  disabled>cool link2</MenuItem>
          <MenuItem>cool link3</MenuItem>

          <SubMenu title='dropdown'>
            <MenuItem>
              dropdonw1
            </MenuItem>
            <MenuItem>
              dropdonw2
            </MenuItem>
            <MenuItem>
              dropdonw3
            </MenuItem>
          </SubMenu>
        </Menu>

        <hr/>

        <h1>Icon</h1>
        <Icon icon='arrow-down' theme='primary' size='5x' />
        <Icon icon='bell-slash' theme='warning' size='5x' />
        <Icon icon='bug' theme='secondary' size='5x' />
        <Icon icon='ban' theme='info' size='5x' />
        <Icon icon='cat' theme='danger' size='5x'/>

      </header>
    </div>
  );
}

export default App;
