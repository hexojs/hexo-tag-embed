import { htmlTag } from 'hexo-util';

type embedType1 = [string];
type embedType2 = [string, string];
type embedType3 = [string, boolean];
type embedType4 = [string, string, boolean];

/**
* Youtube tag
*
* Syntax:
*   {% youtube video_id, type, cookie %}
*/
export function youtubeTag([id, type = 'video', cookie = true]: embedType1 | embedType2 | embedType3 | embedType4) {
  if (typeof type === 'boolean') {
    cookie = type;
    type = 'video';
  }

  const ytLink = cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
  const embed = type === 'video' ? '/embed/' : '/embed/videoseries?list=';

  const iframeTag = htmlTag('iframe', {
    src: ytLink + embed + id,
    frameborder: '0',
    loading: 'lazy',
    allowfullscreen: true
  }, '');

  return htmlTag('div', { class: 'video-container' }, iframeTag, false);
}
