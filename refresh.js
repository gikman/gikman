(function(window, $, undefined) {

var hasTouch = 'ontouchstart' in window,
    startEvent = hasTouch ? 'touchstart' : 'mousedown',
    endEvent = hasTouch ? 'touchend' : 'mouseup';

var STATES = {
   ...
};

var CLASS_NAMES = {
   ...
};

var PullToReload = function(callback, wrapper, instructionsContent) {
// create all the dom elements and append the right before a content wrapper, but after a primary main wrapper.
// <div class="mainWrapper" style="overflow: scroll; height: 600px;"><div class="pullToReloadWrapper"></div><div class="contentWrapper"></div></div> is the markup.

// Check if the main wrapper's height is bigger than the content wrapper's height. If so, then change the main wrapper height to be the height of the content wrapper.

// scroll main wrapper by the reload wrapper's height.

// set state to pull

// invoke initEvents()
};

PullToReload.prototype.setState = function(state) {
// set the state of either pull, update, or release. Change CSS classes and content.
}
// boiler plate event handling switch
PullToReload.prototype.handleEvent = function(e) {
    switch (e.type) {
    case startEvent:
        this.start(e);
        break;
    case "scroll": 
        this.scroll(e);
        break;
    case endEvent:
        this.end(e);
        break;
    }
};

PullToReload.prototype.initEvents = function() {
// add event listeners for startEvent and endEvent with method "this"
// calling this in an event listener automatically calls handleEvent()

};

PullToReload.prototype.start = function() {
    // start listening to on scroll for the wrapper
};

PullToReload.prototype.end = function(e) {
// remove scroll event listener
// if the current state is in release, then set state to update and invoke the callback,
// else the state is in pull, then invoke reset()

};

PullToReload.prototype.scroll = function(e) {
// if current scroll position is almost to the top, change state to release.
// else put it back to pull state.

};

PullToReload.prototype.reset = function() {       
// animate scroll to height of reload component. 
// put css classes back to the beginning 
};
})(window, jQuery, I);
