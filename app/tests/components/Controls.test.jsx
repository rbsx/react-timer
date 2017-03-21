const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const Controls = require('Controls');

describe('Controls', () => {
  it('Should exist', () => {
    expect(Controls).toExist();
  });

  describe('Render', () => {
    it('Should render pause when started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('Should render start when paused or stoped', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $startButton = $el.find('button:contains(Start)');
      expect($startButton.length).toBe(1);

    })
  });
})
