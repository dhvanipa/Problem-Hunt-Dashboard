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
} from 'semantic-ui-react';
import './Top.css';

export class Top extends Component {
  render () {
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
              <Form inverted className="box">
                <Form.Field>
                  <label>Idea Name</label>
                  <input placeholder="Idea Name" />
                </Form.Field>
                <Form.Field>
                  <Form.TextArea
                    label="Idea Description"
                    placeholder="Tell us more about your idea..."
                  />
                </Form.Field>
                <Button
                  className="submitButton"
                  inverted
                  color="green"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
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
