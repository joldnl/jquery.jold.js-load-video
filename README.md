# jQuery JOLD Js-load-video

Version 1.0.0

## Summary

A jQuery plugin that shows placeholder images for embedded YouTube or Vimeo videos, and only loads the video after clicking the placeholder.

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
        <a href="#" class="btn btn__large btn__green btn__notext btn__modal--play" title="Video afspelen"></a>
    </div>
</div>

```

Set the data attributes:

**Service:** Can be either YouTube or Vimeo. Other services are not supported.

**placeholder:** You can provide your own placeholder (url). Leave this empty to retrieve the thumbnail from YouTube or Vimeo automatically.

**data-embed:** The video key or ID from YouTube or Vimeo




### Initialize the plugin

```js
$('.js-load-video').joldJsLoadVideo({ youtubeThumbSize: 'hqdefault', vimeoThumbSize: 'thumbnail_large' });

```

This example checks for all .js-load-video elements, places a placeholder and loads the video on click.




## Requirements

Tested with jQuery 1.12.1.


## Changelog


#### Version 1.0.0

* Initial commit.
