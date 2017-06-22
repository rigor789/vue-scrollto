export default {
    $(selector) {
        if (typeof selector !== "string") {
            return selector;
        }
        return document.querySelector(selector);
    },
    on(element, events, handler) {
        if (!(events instanceof Array)) {
            events = [events];
        }
        for (let i = 0; i < events.length; i++) {
            element.addEventListener(events[i], handler);
        }
    },
    off(element, events, handler) {
        if (!(events instanceof Array)) {
            events = [events];
        }
        for (let i = 0; i < events.length; i++) {
            element.removeEventListener(events[i], handler);
        }
    },
    cumulativeOffset(element) {
        let top = 0;
        let left = 0;

        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top: top,
            left: left
        };
    }
};
