const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('Should exist', () => {
    expect(Clock).toExist();
  });

  describe('Render', () => {
    it('Should render clock to output', () => {
      let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />),
          $el = $(ReactDOM.findDOMNode(clock)),
          actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    })
  })

  describe("formatSeconds", () => {
    it('Should format seconds', ()=> {
      let clock = TestUtils.renderIntoDocument(<Clock/>),
          seconds = 61,
          expected = '01:01',
          actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    it('Should format seconds or minutes lower then 10 with leading 0', ()=> {
      let clock = TestUtils.renderIntoDocument(<Clock/>),
          seconds = 61,
          expected = '01:01',
          actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    })
  })
});
