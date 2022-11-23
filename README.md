# hexo-tag-embed

[![Tester](https://github.com/hexojs/hexo-tag-embed/actions/workflows/tester.yml/badge.svg)](https://github.com/hexojs/hexo-tag-embed/actions/workflows/tester.yml)

# NOTE

This plugin's features have been divided from https://github.com/hexojs/hexo

- refs:
    - https://github.com/hexojs/hexo/pull/5067
    - https://github.com/hexojs/hexo/pull/5064
    - https://github.com/hexojs/hexo/pull/5065
    - https://github.com/hexojs/hexo/pull/5066

# Usage

## Gist

To embed a Gist snippet:

```ejs
{% gist gist_id [filename] %}
```

## jsFiddle

To embed a jsFiddle snippet:

```ejs
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Vimeo

Inserts a responsive or specified size Vimeo video.

```ejs
{% vimeo video_id [width] [height] %}
```

## YouTube

Inserts a YouTube video.

```ejs
{% youtube video_id [type] [cookie] %}
```

### Examples

Embed a video

```ejs
{% youtube lJIrF4YjHfQ %}
```

Embed a playlist

```ejs
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' %}
```

Enable privacy-enhanced mode

YouTube’s cookie is not used in this mode.

```ejs
{% youtube lJIrF4YjHfQ false %}
{% youtube PL9hW1uS6HUfscJ9DHkOSoOX45MjXduUxo 'playlist' false %}
```

## LICENSE

MIT