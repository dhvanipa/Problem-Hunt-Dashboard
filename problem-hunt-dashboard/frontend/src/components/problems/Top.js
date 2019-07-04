import React, {Component} from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Button,
  Card,
  Image,
  Label,
  Checkbox,
  Form,
  Table,
  Message,
} from 'semantic-ui-react';
import './Top.css';
import Cookies from 'js-cookie';

export class Top extends Component {
  constructor (props) {
    super (props);
    this.state = {
      idea_name: '',
      idea_desc: '',
      submitAuthError: false,
      submitFieldsError: false,
      submitSuccess: false,
    };

    this.handleIdeaNameChange = this.handleIdeaNameChange.bind (this);
    this.handleIdeaDescChange = this.handleIdeaDescChange.bind (this);
    this.postIdea = this.postIdea.bind (this);
  }

  handleIdeaNameChange (event) {
    this.setState ({idea_name: event.target.value});
  }

  handleIdeaDescChange (event) {
    this.setState ({idea_desc: event.target.value});
  }

  postIdea () {
    console.log ('Posting');
    if (this.state.idea_name == '' || this.state.idea_desc == '') {
      this.setState ({
        submitAuthError: false,
        submitSuccess: false,
        submitFieldsError: true,
      });
    } else {
      var idea = {name: this.state.idea_name, short_desc: this.state.idea_desc};
      fetch ('api/ideas/', {
        method: 'POST',
        body: JSON.stringify (idea),
        headers: {
          'X-CSRFToken': Cookies.get ('csrftoken'),
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then (res => {
          if (res.status == 200) {
            res.json ();
            this.setState ({
              idea_name: '',
              idea_desc: '',
              submitAuthError: false,
              submitSuccess: true,
              submitFieldsError: false,
            });
          } else {
            this.setState ({
              submitAuthError: true,
              submitSuccess: false,
              submitFieldsError: false,
            });
          }
        })
        .then (
          result => {
            console.log (result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          error => {
            console.log (result);
          }
        );
    }
  }

  render () {
    const {
      idea_name,
      idea_desc,
      submitAuthError,
      submitSuccess,
      submitFieldsError,
    } = this.state;
    return (
      <div className="topComp">
        <Grid columns="equal">
          <Grid.Row columns="equal" />
          <Grid.Row columns="equal">
            <Grid.Column>
              <Header as="h2" textAlign="left">
                POST AN IDEA
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" textAlign="left">
                LEADERBOARD
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid columns="equal">

          <Grid.Row columns="equal">
            <Grid.Column>
              <Form inverted className="box" onSubmit={this.postIdea}>
                <Form.Field>
                  <label>Idea Name</label>
                  <input
                    placeholder="Idea Name"
                    value={idea_name}
                    onChange={this.handleIdeaNameChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.TextArea
                    label="Idea Description"
                    placeholder="Tell us more about your idea..."
                    value={idea_desc}
                    onChange={this.handleIdeaDescChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Button
                    className="submitButton"
                    inverted
                    color="green"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form.Field>
              </Form>
              <Message hidden={!submitAuthError} warning>
                <Message.Header>
                  You must register before you can do that!
                </Message.Header>
                <p>Visit our registration page, then try again.</p>
              </Message>
              <Message hidden={!submitFieldsError} negative>
                <Message.Header>
                  Submit Error!
                </Message.Header>
                <p>Fields cannot be empty.</p>
              </Message>
              <Message hidden={!submitSuccess} positive>
                <Message.Header>Idea submitted!</Message.Header>
                <p>
                  Scroll down to see your idea.
                </p>
              </Message>
            </Grid.Column>

            <Grid.Column>
              <div className="box">
                <Table inverted basic="very" collapsing>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Profile</Table.HeaderCell>
                      <Table.HeaderCell>Total Likes</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" inverted image>
                          <Image
                            src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                            circular
                            size="mini"
                          />
                          <Header.Content>
                            Lena

                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>22</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Image
                            src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                            circular
                            size="mini"
                          />
                          <Header.Content>
                            Matthew

                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>15</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Image
                            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                            circular
                            size="mini"
                          />
                          <Header.Content>
                            Lindsay

                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>12</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Image
                            src="https://react.semantic-ui.com/images/avatar/small/mark.png"
                            circular
                            size="mini"
                          />
                          <Header.Content>
                            Mark

                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>11</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Image
                            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                            circular
                            size="mini"
                          />
                          <Header.Content>
                            Bablu
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>10</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Top;
