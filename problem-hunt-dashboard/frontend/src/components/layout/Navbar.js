import React, {Component} from 'react';
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Menu,
  Icon,
  Label,
} from 'semantic-ui-react';
import './Navbar.css';

export class Navbar extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error: null,
      activeMenuItem: 'Browse',
      activeFilterItem: 'closest',
      user: this.props.user,
    };
  }

  componentDidMount () {}

  componentDidUpdate (prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState ({user: this.props.user});
    }
  }

  loginFacebook = () => {
    const url = 'accounts/facebook/login/?process=login';
    window.open (url, '_self');
  };

  loginTwitter = () => {
    const url = 'accounts/twitter/login/?process=login';
    window.open (url, '_self');
  };

  logout = () => {
    const url = 'accounts/logout';
    window.open (url, '_self');
  };

  handleMenuItemClick = (e, {name}) => this.setState ({activeMenuItem: name});
  handleFilterItemClick = (e, {name}) =>
    this.setState ({activeFilterItem: name});

  render () {
    const {activeMenuItem, activeFilterItem, user} = this.state;
    return (
      <Menu pointing secondary>
        <Menu.Item header>
          <Icon name="home" color="blue" size="large" /> ProblemHunt
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            header
            name="community"
            active={false}
            content="The Community"
          />
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          {user &&
            <Menu.Item>
              <Image src={user.picture} avatar />
              <span>{user.full_name}</span>
            </Menu.Item>}
          {!user &&
            <Menu.Item>
              <Modal
                trigger={<Button primary>Sign Up</Button>}
                centered={false}
              >
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
                    <Button color="twitter" onClick={this.loginTwitter}>
                      <Icon name="twitter" />
                      Twitter
                    </Button>
                    <p>
                      We'll never post to any of your accounts without your permission.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Menu.Item>}
          {!user &&
            <Menu.Item>
              <Modal
                trigger={<Button color="teal">Login In</Button>}
                centered={false}
              >
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
                    <Button color="twitter" onClick={this.loginTwitter}>
                      <Icon name="twitter" />
                      Twitter
                    </Button>
                    <p>
                      We'll never post to any of your accounts without your permission.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Menu.Item>}
          {user &&
            <Menu.Item>
              <Button color="red" onClick={this.logout}>Log Out</Button>
            </Menu.Item>}
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
