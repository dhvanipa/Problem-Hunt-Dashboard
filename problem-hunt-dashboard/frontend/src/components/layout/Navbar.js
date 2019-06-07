import React, {Component} from 'react';
import {Button, Header, Image, Modal, Input, Menu} from 'semantic-ui-react';

export class Navbar extends Component {
  state = {activeItem: 'home'};

  handleItemClick = (e, {name}) => this.setState ({activeItem: name});

  render () {
    const {activeItem} = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>
            <Modal trigger={<Button primary>Sign Up</Button>} centered={false}>
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Image
                  wrapped
                  size="medium"
                  src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with your e-mail address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Menu.Item>

          <Menu.Item>
            <Button>Log-in</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
