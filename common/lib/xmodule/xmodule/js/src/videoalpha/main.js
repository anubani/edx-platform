(function (requirejs, require, define) {

// REFACTOR. Build JS doc. Add docs on how to build docs.

// Main module.
require(
[
    'videoalpha/display/initialize.js',
    'videoalpha/display/video_control.js',
    'videoalpha/display/video_quality_control.js',
    'videoalpha/display/video_progress_slider.js',
    'videoalpha/display/video_volume_control.js',
    'videoalpha/display/video_speed_control.js',
    'videoalpha/display/video_caption.js'
],
function (
    Initialize,
    VideoControl,
    VideoQualityControl,
    VideoProgressSlider,
    VideoVolumeControl,
    VideoSpeedControl,
    VideoCaption
) {
    var previousState;

    // Because this constructor can be called multiple times on a single page (when
    // the user switches verticals, the page doesn't reload, but the content changes), we must
    // will check each time if there is a previous copy of 'state' object. If there is, we
    // will make sure that copy exists cleanly. We have to do this because when verticals switch,
    // the code does not handle any Xmodule JS code that is running - it simply removes DOM
    // elements from the page. Any functions that were running during this, and that will run
    // afterwards (expecting the DOM elements to be present) must be stopped by hand.
    previousState = null;

    window.VideoAlpha = function (element) {
        var state;

        // Check for existance of previous state, uninitialize it if necessary, and create a new state.
        // Store new state for future invocation of this module consturctor function.
        if (previousState !== null) {
            previousState.videoPlayer.onPause();
        }
        state = {};
        previousState = state;

        Initialize(state, element);

        VideoControl(state);
        VideoQualityControl(state);
        VideoProgressSlider(state);
        VideoVolumeControl(state);
        VideoSpeedControl(state);

        if (state.config.show_captions) {
            VideoCaption(state);
        }
    };
});

}(RequireJS.requirejs, RequireJS.require, RequireJS.define));
