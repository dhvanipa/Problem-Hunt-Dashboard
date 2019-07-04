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
  Comment,
} from 'semantic-ui-react';
import './Problems.css';
import Cookies from 'js-cookie';
import {ToastContainer, toast} from 'react-toastify';

export class Problems extends Component {
  contextRef = createRef ();

  constructor (props) {
    super (props);
    this.state = {ideas: null, commentsText: {}};
    this.likeIdea = this.likeIdea.bind (this);
    this.notificationDOMRef = React.createRef ();
  }

  getCommentsForIdea (idea_id) {
    console.log ('getting comments');
    fetch ('api/idea/' + idea_id + '/comments').then (res => res.json ()).then (
      result => {
        return result['list'].map ((el, i) => ( // Maybe, there is a better key :D
          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <span>Today at 5:42PM</span>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ));
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState ({
          error,
        });
      }
    );
  }

  getIdeas () {
    console.log ('getting ideas');
    fetch ('api/ideas/').then (res => res.json ()).then (
      result => {
        this.setState ({
          ideas: result['list'],
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState ({
          error,
        });
      }
    );
  }

  commentIdea (el, data) {
    console.log (data.id);
    console.log (this.state.commentsText);
    fetch ('api/idea/' + data.id + '/comments/', {
      method: 'POST',
      body: JSON.stringify (this.state.commentsText[data.id]),
      headers: {
        'X-CSRFToken': Cookies.get ('csrftoken'),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then (res => {
        if (res.status == 200) {
          console.log (res);
          toast ('Success, added comment!', {type: toast.TYPE.SUCCESS});
          return res.json ();
        } else {
        }
      })
      .then (
        result => {
          console.log (result);
          this.getIdeas ();
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log (result);
        }
      );
  }

  likeIdea (el, data) {
    console.log (data.id);
    fetch ('api/idea/' + data.id + '/like/', {
      method: 'POST',
      body: JSON.stringify ({}),
      headers: {
        'X-CSRFToken': Cookies.get ('csrftoken'),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then (res => {
        if (res.status == 200) {
          console.log (res);
          return res.json ();
        } else {
        }
      })
      .then (
        result => {
          console.log (result);
          if (result['successunLiked']) {
            toast ('Warning, unliked post!', {
              type: toast.TYPE.WARNING,
            });
          } else if (result['successLiked']) {
            toast ('Success, liked post!', {type: toast.TYPE.SUCCESS});
          }
          this.getIdeas ();
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log (result);
        }
      );
  }

  handleCommentChange (el, data) {
    let new_comments = this.state.commentsText;
    new_comments[data.id] = event.target.value;
    this.setState ({commentsText: new_comments});
  }

  displayListIdeas = () => {
    if (this.state.ideas) {
      console.log ('rendering');
      var total_ideas = this.state.ideas.length;
      return this.state.ideas.map ((el, i) => ( // Maybe, there is a better key :D
        <Grid.Column>
          <Card>
            <Card.Content>
              <Image floated="left" size="mini" circular src={el.creator_pic} />
              <Card.Header>{el.name}</Card.Header>
              <Card.Meta>{el.creator_name}</Card.Meta>
              <Card.Description>
                {el.short_desc}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button
                id={el.id}
                circular
                icon="hand spock"
                onClick={(el, data) => this.likeIdea (el, data)}
              />
              <Label as="a" basic pointing="left">
                {el.num_likes}
              </Label>
              <Button circular icon="comment" />
              <Label as="a" basic pointing="left">
                {el.num_comments}
              </Label>
              <Button circular icon="bell" />
            </Card.Content>
            <Comment.Group minimal>
              <Header as="h3" dividing>
                Comments
              </Header>

              {this.getCommentsForIdea (el.id)}

              <Form reply>
                <Form.TextArea
                  id={el.id}
                  onChange={(el, data) => this.handleCommentChange (el, data)}
                />
                <Button
                  id={el.id}
                  content="Add Reply"
                  labelPosition="left"
                  icon="edit"
                  primary
                  onClick={(el, data) => this.commentIdea (el, data)}
                />
              </Form>
            </Comment.Group>
          </Card>
        </Grid.Column>
      ));
    }
  };

  componentDidMount () {
    this.getIdeas ();
  }

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
                {this.displayListIdeas ()}
              </Grid>

              <Divider hidden />

              <Header as="h2" inverted textAlign="left">
                YESTERDAY
              </Header>
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
        <ToastContainer />
      </div>
    );
  }
}

export default Problems;
