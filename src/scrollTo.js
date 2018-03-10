import BezierEasing from "bezier-easing";
import easings from "./easings";
import _ from "./utils";

const abortEvents = [
    "mousedown",
    "wheel",
    "DOMMouseScroll",
    "mousewheel",
    "keyup",
    "touchmove"
];

let defaults = {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
};

export function setDefaults(options) {
    defaults = Object.assign({}, defaults, options);
}

export const scroller = () => {
    let element; // element to scroll to
    let container; // container to scroll
    let duration; // duration of the scrolling
    let easing; // easing to be used when scrolling
    let offset; // offset to be added (subtracted)
    let cancelable; // indicates if user can cancel the scroll or not.
    let onStart; // callback when scrolling is started
    let onDone; // callback when scrolling is done
    let onCancel; // callback when scrolling is canceled / aborted
    let x; // scroll on x axis
    let y; // scroll on y axis

    let initialX; // initial X of container
    let targetX; // target X of container
    let initialY; // initial Y of container
    let targetY; // target Y of container
    let diffX; // difference
    let diffY; // difference

    let abort; // is scrolling aborted

    let abortEv; // event that aborted scrolling
    let abortFn = e => {
        if (!cancelable) return;
        abortEv = e;
        abort = true;
    };
    let easingFn;

    let timeStart; // time when scrolling started
    let timeElapsed; // time elapsed since scrolling started

    let progress; // progress

    function scrollTop(container) {
        let scrollTop = container.scrollTop;

        if (container.tagName.toLowerCase() === "body") {
            // in firefox body.scrollTop always returns 0
            // thus if we are trying to get scrollTop on a body tag
            // we need to get it from the documentElement
            scrollTop = scrollTop || document.documentElement.scrollTop;
        }

        return scrollTop;
    }

    function scrollLeft(container) {
        let scrollLeft = container.scrollLeft;

        if (container.tagName.toLowerCase() === "body") {
            // in firefox body.scrollLeft always returns 0
            // thus if we are trying to get scrollLeft on a body tag
            // we need to get it from the documentElement
            scrollLeft = scrollLeft || document.documentElement.scrollLeft;
        }

        return scrollLeft;
    }

    function step(timestamp) {
        if (abort) return done();
        if (!timeStart) timeStart = timestamp;

        timeElapsed = timestamp - timeStart;

        progress = Math.min(timeElapsed / duration, 1);
        progress = easingFn(progress);

        topLeft(
            container,
            initialY + diffY * progress,
            initialX + diffX * progress
        );

        timeElapsed < duration ? window.requestAnimationFrame(step) : done();
    }

    function done() {
        if (!abort) topLeft(container, targetY, targetX);
        timeStart = false;

        _.off(container, abortEvents, abortFn);
        if (abort && onCancel) onCancel(abortEv, element);
        if (!abort && onDone) onDone(element);
    }

    function topLeft(element, top, left) {
        if (y) element.scrollTop = top;
        if (x) element.scrollLeft = left;
        if (element.tagName.toLowerCase() === "body") {
            // in firefox body.scrollTop doesn't scroll the page
            // thus if we are trying to scrollTop on a body tag
            // we need to scroll on the documentElement
            if (y) document.documentElement.scrollTop = top;
            if (x) document.documentElement.scrollLeft = left;
        }
    }

    function scrollTo(target, _duration, options = {}) {
        if (typeof _duration === "object") {
            options = _duration;
        } else if (typeof _duration === "number") {
            options.duration = _duration;
        }

        element = _.$(target);

        if (!element) {
            return console.warn(
                "[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " +
                    target
            );
        }

        container = _.$(options.container || defaults.container);
        duration = options.duration || defaults.duration;
        easing = options.easing || defaults.easing;
        offset = options.offset || defaults.offset;
        cancelable = options.hasOwnProperty("cancelable")
            ? options.cancelable !== false
            : defaults.cancelable;
        onStart = options.onStart || defaults.onStart;
        onDone = options.onDone || defaults.onDone;
        onCancel = options.onCancel || defaults.onCancel;
        x = options.x === undefined ? defaults.x : options.x;
        y = options.y === undefined ? defaults.y : options.y;

        var cumulativeOffsetContainer = _.cumulativeOffset(container);
        var cumulativeOffsetElement = _.cumulativeOffset(element);

        if (typeof offset === "function") {
            offset = offset();
        }

        initialY = scrollTop(container);
        targetY = cumulativeOffsetElement.top -
            cumulativeOffsetContainer.top +
            offset;

        initialX = scrollLeft(container);
        targetX = cumulativeOffsetElement.left -
            cumulativeOffsetContainer.left +
            offset;

        abort = false;

        diffY = targetY - initialY;
        diffX = targetX - initialX;

        if (typeof easing === "string") {
            easing = easings[easing] || easings["ease"];
        }

        easingFn = BezierEasing.apply(BezierEasing, easing);

        if (!diffY && !diffX) return;
        if (onStart) onStart(element);

        _.on(container, abortEvents, abortFn, { passive: true });

        window.requestAnimationFrame(step);

        return () => {
            abortEv = null;
            abort = true;
        };
    }

    return scrollTo;
};

const _scroller = scroller();
export default _scroller;
