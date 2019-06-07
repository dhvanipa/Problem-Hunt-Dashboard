import React, {Component} from 'react';
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Menu,
  Icon,
} from 'semantic-ui-react';

export class Navbar extends Component {
  state = {activeItem: 'home'};

  loginFacebook = () => {
    const url = 'accounts/facebook/login/?process=login';
    window.open (url, '_self');
  };

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
              <Modal.Header>Login to Problem Hunt</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <Header>Social Login</Header>
                  <p>
                    We're a community of product people here to geek out and discover new, interesting products.
                  </p>
                  <Button color="facebook" onClick={this.loginFacebook}>
                    <Icon name="facebook" />
                    Facebook
                  </Button>
                  <p>
                    We'll never post to any of your accounts without your permission.
                  </p>
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
