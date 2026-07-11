import { htmlTag } from 'hexo-util';

/**
* Tiktok tag
*
* Syntax:
*   {% tiktok video_id %}
* 
* CSS styling can be done usig the class 'tiktoktag'
*/
export function tiktokTag(id) {
  const src = 'https://www.tiktok.com/player/v1/' + id + '?autoplay=0&loop=1&description=1';

  const iframeTag = htmlTag('iframe', {
    src,
    frameborder: '0',
    loading: 'lazy',
    allowfullscreen: true
  }, '');

  return htmlTag('div', { class: 'video-container tiktoktag' }, iframeTag, false);
}
