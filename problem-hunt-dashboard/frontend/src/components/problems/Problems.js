import React, {Component, createRef} from 'react';
import {
  Container,
  Ref,
  Sticky,
  Divider,
  Grid,
  Header,
  Icon,
  Button,
  Card,
  Rail,
  Image,
  Label,
  Checkbox,
  Form,
  Table,
  Segment,
} from 'semantic-ui-react';
import './Problems.css';

export class Problems extends Component {
  contextRef = createRef ();
  render () {
    return (
      <div>
        <Container>
          <Segment.Group horizontal>
            <Segment inverted>
              <Header as="h2" inverted textAlign="left">
                TODAY
              </Header>
              <Grid columns={2}>
                <Grid.Row floated="left">
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Button circular icon="hand spock" />
                        <Button circular icon="comment" />
                        <Button circular icon="bell" />
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>

                        <Button circular icon="hand spock" />
                        <Button circular icon="comment" />
                        <Button circular icon="bell" />
                      </Card.Content>
                    </Card>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui three buttons">
                          <Button circular icon="hand spock" />
                          <Button circular icon="comment" />
                          <Button circular icon="bell" />
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui three buttons">
                          <Button circular icon="hand spock" />
                          <Button circular icon="comment" />
                          <Button circular icon="bell" />
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column />
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui three buttons">
                          <Button circular icon="hand spock" />
                          <Button circular icon="comment" />
                          <Button circular icon="bell" />
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui three buttons">
                          <Button circular icon="hand spock" />
                          <Button circular icon="comment" />
                          <Button circular icon="bell" />
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column />
                </Grid.Row>

              </Grid>

              <Divider hidden />

              <Header as="h2" inverted textAlign="left">
                YESTERDAY
              </Header>
              <Grid columns={2}>
                <Grid.Row floated="left">
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Button circular icon="hand spock" />
                        <Button circular icon="comment" />
                        <Button circular icon="bell" />
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>

                        <Button circular icon="hand spock" />
                        <Button circular icon="comment" />
                        <Button circular icon="bell" />
                      </Card.Content>
                    </Card>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui three buttons">
                          <Button circular icon="hand spock" />
                          <Button circular icon="comment" />
                          <Button circular icon="bell" />
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui three buttons">
                          <Button circular icon="hand spock" />
                          <Button circular icon="comment" />
                          <Button circular icon="bell" />
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column />
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui three buttons">
                          <Button circular icon="hand spock" />
                          <Button circular icon="comment" />
                          <Button circular icon="bell" />
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Image
                          floated="left"
                          size="mini"
                          circular
                          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>Bus app to not fall asleep</Card.Header>
                        <Card.Meta>Dhvani Patel</Card.Meta>
                        <Card.Description>
                          I keep falling asleep on the bus and when I do, I miss my stop. I want to
                          create an app that plays music when the stop is reached!
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui three buttons">
                          <Button circular icon="hand spock" />
                          <Button circular icon="comment" />
                          <Button circular icon="bell" />
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column />
                </Grid.Row>

              </Grid>
            </Segment>
            <Ref innerRef={this.contextRef}>
              <Segment>
                <Rail position="left">
                  <Sticky context={this.contextRef} offset={50}>
                    <Header as="h2" inverted textAlign="left">
                      COLLABORATE
                    </Header>
                    <div className="box">

                      <Table inverted basic="very" collapsing>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>Profile</Table.HeaderCell>
                            <Table.HeaderCell>
                              Idea Description
                            </Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>

                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              <Header as="h4" image>
                                <Image
                                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                                  circular
                                  size="mini"
                                />
                              </Header>
                            </Table.Cell>
                            <Table.Cell>
                              App that plays music when you reach your stop
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Header as="h4" image>
                                <Image
                                  src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                                  circular
                                  size="mini"
                                />
                              </Header>
                            </Table.Cell>
                            <Table.Cell>
                              Geolocation based marketing app that targets customers with sales
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              <Header as="h4" image>
                                <Image
                                  src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                                  circular
                                  size="mini"
                                />
                              </Header>
                            </Table.Cell>
                            <Table.Cell>
                              Pen that figures out what your mental state is like
                            </Table.Cell>
                          </Table.Row>

                        </Table.Body>
                      </Table>
                    </div>
                  </Sticky>
                </Rail>
              </Segment>
            </Ref>
          </Segment.Group>

        </Container>

      </div>
    );
  }
}

export default Problems;
