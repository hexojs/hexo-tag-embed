import { youtubeTag } from '../lib/tags/youtube';
import { load } from 'cheerio';
import chai from 'chai';
const should = chai.should(); // eslint-disable-line

describe('youtube', () => {

  it('id', () => {
    const $ = load(youtubeTag(['foo']));

    $('.video-container').html().should.be.ok;
    $('iframe').attr('src').should.eql('https://www.youtube.com/embed/foo');
    $('iframe').attr('frameborder').should.eql('0');
    $('iframe').attr('allowfullscreen').should.eql('');
    $('iframe').attr('loading').should.eql('lazy');
  });

  it('type', () => {
    const $video = load(youtubeTag(['foo', 'video']));
    $video('.video-container').html().should.be.ok;
    $video('iframe').attr('src').should.eql('https://www.youtube.com/embed/foo');

    const $playlist = load(youtubeTag(['foo', 'playlist']));
    $playlist('.video-container').html().should.be.ok;
    $playlist('iframe').attr('src').should.eql('https://www.youtube.com/embed/videoseries?list=foo');
  });

  it('cookie', () => {
    const $video1 = load(youtubeTag(['foo', 'video', false]));
    $video1('.video-container').html().should.be.ok;
    $video1('iframe').attr('src').should.eql('https://www.youtube-nocookie.com/embed/foo');

    // cookie as second parameter
    const $video2 = load(youtubeTag(['foo', false]));
    $video2('.video-container').html().should.be.ok;
    $video2('iframe').attr('src').should.eql('https://www.youtube-nocookie.com/embed/foo');
  });
});
