import React, { Component } from 'react';

export default class PageNotFound extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#ecf0f1', height: '100vh' }}>
        <div
          style={{
            left: '50%',
            top: '30%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontSize: '250px',
              marginBottom: '0',
              color: 'red'
            }}
          >
            404
          </h1>
          <h2 style={{ textAlign: 'center' }}>Page not Found</h2>
        </div>
      </div>
    );
  }
}
