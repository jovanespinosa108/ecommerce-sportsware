import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div className='app'>
        <h1>E-commerce</h1>
        {/* {...this.props.children} */}
      </div>
    );
  }
}

export default Layout;