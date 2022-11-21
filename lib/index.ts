import { jsfiddleTag } from './tags/jsfiddle';
import { vimeoTag } from './tags/vimeo';

// @ts-ignore
hexo.extend.tag.register('jsfiddle', jsfiddleTag);
// @ts-ignore
hexo.extend.tag.register('vimeo', vimeoTag);
