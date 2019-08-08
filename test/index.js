const { configure, shallow, mount } = require('enzyme');
const { shallowWithState, mountWithState } = require('enzyme-redux');
const Adapter = require('enzyme-adapter-react-16');
const { JSDOM } = require('jsdom');
const { connect } = require('react-redux');

configure({ adapter: new Adapter() });
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.React = require('react');
global.shallow = shallow;
global.mount = mount;
global.shallowWithState = shallowWithState;
global.mountWithState = mountWithState;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
global.connectRedux = connect;
