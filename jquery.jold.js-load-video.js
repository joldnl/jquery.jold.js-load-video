/*!
 * JOLD jQuery Load Video 1.0.3
 *
 * Copyright (c) 2018 JOLD Interactive; Jurgen Oldenburg <info@jold.nl>
 *
 * A jQuery plugin that only loads youtube and vimeo video's after clicking, for better performance
 * It also loads a placeholder image
 * See README.md for usage
 *
 * Licences: BSD-3-Clause
 * https://opensource.org/licenses/BSD-3-Clause
 */
(function($){

    var JoldLoadVideo = function( element, options ) {

        var obj         = this;
        var $element    = $(element);
        var defaults    = {
            youtubeThumbSize: 'maxresdefault',
            vimeoThumbSize: 'thumbnail_large',
            placeholderClass: 'img-fluid',
        }

        /**
         * Pick up the options passed to the plugin
         */
        var settings = $.extend({}, defaults, options);

        /**
         * Load video's on click
         */
        $element.each(function() {

            // Get all data from video
            var service     = $(this).data('service');
            var placeholder = $(this).data('placeholder');
            var videoKey    = $(this).data('embed');

            // Prepare placeholder image DOM element
            var image       = new Image();

            // Set image attributes
            $(image).addClass(settings.placeholderClass);

            // Prepare the iframe
            var iframe      = document.createElement('iframe');

            // Set iframe attributes
            $(iframe).attr('webkitallowfullscreen', '');
            $(iframe).attr('mozallowfullscreen', '');
            $(iframe).attr('webkitallowfullscreen', '');
            $(iframe).attr('frameborder', '0');
            $(iframe).attr('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');


            // Get uploaded placeholder, if its present
            if ( placeholder !== ''  ) {
                image.src   = placeholder;
            }


            // YouTube placeholder and iframe url
            if ( service == 'youtube' ) {
                if ( placeholder == '' ) {
                    image.src   = "https://img.youtube.com/vi/" + videoKey + "/" + settings.youtubeThumbSize + ".jpg";
                }
                iframe.src  = "https://www.youtube.com/embed/" + videoKey + "?rel=0&showinfo=0&autoplay=1";
            }

            // Vimeo placeholder and iframe url
            else if ( service == 'vimeo' ) {

                $.ajax({
                    url: "http://vimeo.com/api/v2/video/" + videoKey + ".json",
                    dataType: 'jsonp',
                    success: function(data){
                        if ( placeholder == '' ) {
                            image.src = data[0][settings.vimeoThumbSize];
                        }
                    }
                });

                iframe.src  = "https://player.vimeo.com/video/" + videoKey + "?autoplay=true";

            }

            // Actually append the image to the DOM
            $(this).append( image );

            // Render the video embed on click
            $(this).on('click', function(event) {

                event.preventDefault();

                // Clear out video container
                $(this).html('');

                // Add the iframe
    			$(this).append( iframe );

            });

        });

    };


    $.fn.joldLoadVideo = function( options ) {

        var element = $(this);

        // Return early if this element already has a plugin instance
        if (element.data('joldLoadVideo')) return element.data('joldLoadVideo');

        // pass options to plugin constructor
        var joldLoadVideo = new JoldLoadVideo( this, options );

        // Store plugin object in this element's data
        element.data('joldLoadVideo', joldLoadVideo);

        return joldLoadVideo;

    };

})(jQuery);
