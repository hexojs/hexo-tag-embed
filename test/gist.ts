import { gistTag } from '../lib/tags/gist';
import { load } from 'cheerio';
import chai from 'chai';
const should = chai.should(); // eslint-disable-line

describe('gist', () => {
  it('id', () => {
    const $ = load(gistTag(['foo']));
    $('script').attr('src').should.eql('//gist.github.com/foo.js');
  });

  it('file', () => {
    const $ = load(gistTag(['foo', 'bar']));
    $('script').attr('src').should.eql('//gist.github.com/foo.js?file=bar');
  });
});
