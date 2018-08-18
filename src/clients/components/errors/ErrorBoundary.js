import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ backgroundColor: '#2980b9', height: '100vh' }}>
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
                color: '#ecf0f1'
              }}
            >
              500
            </h1>
            <Card>
              <CardContent>
                <h2 style={{ textAlign: 'center' }}>
                  Oops... Something went wrong !!
                </h2>
                <p style={{ color: 'red' }}>
                  Please check console for error information ...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
