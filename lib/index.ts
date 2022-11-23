import { gistTag } from './tags/gist';
import { jsfiddleTag } from './tags/jsfiddle';
import { vimeoTag } from './tags/vimeo';
import { youtubeTag } from './tags/youtube';

// @ts-ignore
hexo.extend.tag.register('gist', gistTag);
// @ts-ignore
hexo.extend.tag.register('jsfiddle', jsfiddleTag);
// @ts-ignore
hexo.extend.tag.register('vimeo', vimeoTag);
// @ts-ignore
hexo.extend.tag.register('youtube', youtubeTag);
