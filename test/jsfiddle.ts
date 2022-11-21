import { jsfiddleTag } from '../lib/tags/jsfiddle';
import { load } from 'cheerio';
import chai from 'chai';
const should = chai.should(); // eslint-disable-line

describe('jsfiddle', () => {
  it('id', () => {
    const $ = load(jsfiddleTag(['foo']));
    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');
  });

  it('tabs', () => {
    let $ = load(jsfiddleTag(['foo', 'default']));
    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');
    $ = load(jsfiddleTag(['foo', 'html,css']));
    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/html,css/light');
  });

  it('skin', () => {
    let $ = load(jsfiddleTag(['foo', 'default', 'default']));
    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light');
    $ = load(jsfiddleTag(['foo', 'default', 'dark']));
    $('iframe').attr('src').should.eql('https://jsfiddle.net/foo/embedded/js,resources,html,css,result/dark');
  });

  it('width', () => {
    let $ = load(jsfiddleTag(['foo', 'default', 'default', 'default']));
    $('iframe').attr('width').should.eql('100%');
    $ = load(jsfiddleTag(['foo', 'default', 'default', '500']));
    $('iframe').attr('width').should.eql('500');
  });

  it('height', () => {
    let $ = load(jsfiddleTag(['foo', 'default', 'default', 'default', 'default']));
    $('iframe').attr('height').should.eql('300');
    $ = load(jsfiddleTag(['foo', 'default', 'default', 'default', '500']));
    $('iframe').attr('height').should.eql('500');
  });
});
