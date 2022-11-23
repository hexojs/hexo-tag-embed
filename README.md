# hexo-tag-embed

[![Tester](https://github.com/hexojs/hexo-tag-embed/actions/workflows/tester.yml/badge.svg)](https://github.com/hexojs/hexo-tag-embed/actions/workflows/tester.yml)
[![NPM version](https://badge.fury.io/js/hexo-tag-embed.svg)](https://www.npmjs.com/package/hexo-tag-embed)
[![Coverage Status](https://img.shields.io/coveralls/hexojs/hexo-tag-embed.svg)](https://coveralls.io/r/hexojs/hexo-tag-embed?branch=main)

> **Warning**
>
> Please do not use this plugin with less than hexo `v7.0.0`.

> **Note**
>
> This plugin's features have been divided from https://github.com/hexojs/hexo
>
> - https://github.com/hexojs/hexo/pull/5064
> - https://github.com/hexojs/hexo/pull/5067
> - https://github.com/hexojs/hexo/pull/5065
> - https://github.com/hexojs/hexo/pull/5066

# Installation

```sh
$ npm i hexo-tag-embed
```

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