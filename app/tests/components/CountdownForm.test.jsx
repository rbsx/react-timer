const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('Should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('Should call onSetCountdown if valid seconds entered', () => {
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('Should not call onSetCountdown if not valid seconds entered', () => {
    let spy = expect.createSpy(),
        countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />),
        $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'afd';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled('afd');
  })

});
