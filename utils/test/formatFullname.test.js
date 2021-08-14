const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname(5)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it('should return an error if "fullName" length < 2', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  it('should return an error if fullName = one word, more than two or more then one space between', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John   Test')).to.equal('Error');
  });
  it('should return correct format of fullName', () => {
    expect(formatFullname('newBie miKe')).to.equal('Newbie Mike');
    expect(formatFullname('newbie mike')).to.equal('Newbie Mike');
  });
});