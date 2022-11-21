import { vimeoTag } from '../lib/tags/vimeo';
import { load } from 'cheerio';
import chai from 'chai';
const should = chai.should(); // eslint-disable-line

describe('vimeo', () => {
  it('id', () => {
    const $ = load(vimeoTag(['foo']));

    $('.video-container').html().should.be.ok;
    $('iframe').attr('src').should.eql('https://player.vimeo.com/video/foo');
    $('iframe').attr('frameborder').should.eql('0');
    $('iframe').attr('allowfullscreen').should.eql('');
    $('iframe').attr('loading').should.eql('lazy');
  });
});
