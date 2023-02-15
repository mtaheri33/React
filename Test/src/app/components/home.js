import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    console.log('changing state');
    this.setState({ x: 1 });
  }

  componentDidMount() {
    console.log('component did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('checking if component should update');
    if (nextState.x == 1) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('before state change:');
    console.log(prevState);
    return null;
  }

  componentDidUpdate() {
    console.log('component did update:');
    console.log(this.state);
  }

  componentWillUnmount() {
    console.log('component unmounting');
  }

  render() {
    console.log('home render func');
    return (
      <>
        <p>Home</p>
        <p>state of x: {this.state.x}</p>
        <button onClick={this.changeState}>Click to change state</button>
      </>
    )
  }
}

export default Home;

/*
render is called when:
- navigate to page
- change state

componentDidMount is called when:
- navigate to page

shouldComponentUpdate is called:
- right after state change is initiated

getSnapshotBeforeUpdate is called:
- right after state change is initiated (or right after accepted if using shouldComponentUpdate)
but before it is committed to DOM

componentDidUpdate is called when:
- change state is committed to DOM

componentWillUnmount is called when:
- navigate away from page

So, for the above example, you start the server and navigate to localhost:4000/home
The console will show:
home render func
component did mount

You click the button.  The console will also show:
changing state
checking if component should update
home render func
before state change:
{x: 0}
component did update:
{x: 1}

You navigate to another page.  The console will also show:
component unmounting
*/