import React, { Component } from 'react';
import { Button, Dropdown, Menu, Image, Input, Container } from 'semantic-ui-react';

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>

      <Menu attached='top' size='huge' >
        <Menu.Item>
            <Image src='../static/logo.png' size='small'></Image>
        </Menu.Item>
        
        <Menu.Menu position='center'>
            <Menu.Item>
                <Input icon='search' placeholder='Search courses...' />
            </Menu.Item>
        </Menu.Menu>     

        <Menu.Menu position='right'>
            <Menu.Item
            name='Sign In'
            active={activeItem === 'Sign In'}
            onClick={this.handleItemClick}
            />

            <Menu.Item>
                <Button primary>Sign Up</Button>
            </Menu.Item>
        </Menu.Menu>
      </Menu>
      </Container>  
    )
  }
}