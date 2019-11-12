# jQuery JOLD Js-load-video

Version 1.0.2

## Summary

A jQuery plugin that shows placeholder images for embedded YouTube or Vimeo videos, and only loads the video after clicking the placeholder. This alows for faster page loads as the video's, cookies, and other files of the video services are loaded when the video is actually started. 

## Author

Jurgen Oldenburg ( [@staxxnl](http://twitter.com/staxxnl) / [jold.nl](https://www.jold.nl) / [info@jold.nl](info@jold.nl) )

## Usage

Include `jquery.jold.js-load-video.min.js` after calling jQuery in the footer. Alternatively, include in your `plugins.js` file if using [HTML5 Boilerplate](http://html5boilerplate.com).


### Installation

```bash
$ npm install jquery.jold.js-load-video

```


### HTML Markup

```html
<div class="video-container">
    <div class="js-load-video" data-service="vimeo" data-placeholder="" data-embed="306834650">
        <a href="#" class="btn btn-play" title="Play video">Play</a>
    </div>
</div>

```

### Set the data attributes:

| Data attribute | Description |
| ------------- | -------- |
|**data-service** | Can be either YouTube or Vimeo. Other services are not supported. |
|**data-placeholder** | You can provide your own placeholder (url). Leave this empty to retrieve the thumbnail from YouTube or Vimeo automatically. |
|**data-embed** | The video key or ID from YouTube or Vimeo |


### Plugin options
The plugin has three options you can set:

**youtubeThumbSize:** Set the YouTube placeholder thumbnail image size.
Default: `'maxresdefault'`

**vimeoThumbSize:** Set Vimeo placeholder image image size. Read more: 
Default: `'thumbnail_large'`

**placeholderClass:** Css class of the placeholder image tag
Default: `'img-fluid'`




### Initialize the plugin

```js
$('.js-load-video').joldJsLoadVideo({
    youtubeThumbSize: 'hqdefault',
    vimeoThumbSize: 'thumbnail_large'
    placeholderClass: 'img-fluid'
});
```

This example checks for all .js-load-video elements, places a placeholder and loads the video on click.




## Requirements

Tested with jQuery 1.12.1.


## Changelog


#### Version 1.0.2

* Improve documentation and demonstration files
* Remove unused dependencies


#### Version 1.0.1

* Only set automatic placeholder image if data-placeholder is empty
* Update outdated packages, removing all vulnerabilities


#### Version 1.0.0

* Initial commit.
