const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');


const Countdown = require('Countdown');

describe('Countdown', () => {
  it('Should exist', () => {
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown', () => {
    it('Should set state to started and countdown', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout( () => {
        expect(countdown.state.count).toBe(9);
        expect(countdown.state.countdownStatus).toBe('started');
        done();
      }, 1001);
    });

    it('Should not be devided lower than 0', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);
      setTimeout( () => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001)
    })
  })
});
