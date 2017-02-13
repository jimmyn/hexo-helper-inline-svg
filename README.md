# hexo-helper-inline-svg

Hexo helper that inlines svg image


## Install

``` bash
$ npm install hexo-helper-inline-svg --save
```

## Usage

Add in your theme:

```html
<%- inline_svg('/images/example.svg') %>
```

Or if you want to base64 encode the image

```html
<img src="<%- inline_svg('/images/example.svg', true) %>" />
```

## License

MIT
