import {DirectiveOptions, PluginObject} from "vue"

type ElementDescriptor = Element | string

export interface ScrollOptions {
    el?: ElementDescriptor;
    element?: ElementDescriptor;
    container?: ElementDescriptor;
    duration?: number;
    easing?: string | [number, number, number, number];
    offset?: number | ((element: ElementDescriptor, container: ElementDescriptor) => number);
    force?: boolean;
    cancelable?: boolean;
    onStart?: ((element: Element) => any) | false;
    onDone?: ((element: Element) => any) | false;
    onCancel?: ((event: Event, element: Element) => any) | false;
    x?: boolean;
    y?: boolean;
}

type ScrollToFunction = {
    (options: ScrollOptions): () => void;
    (element: ElementDescriptor, options?: ScrollOptions): () => void;
    (element: ElementDescriptor, duration: number, options?: ScrollOptions): () => void;
}

declare const _default: PluginObject<ScrollOptions> &
    DirectiveOptions & {
    scrollTo: ScrollToFunction
    setDefaults: ScrollToFunction;
};

export default _default

declare module "vue/types/vue" {
    interface Vue {
        $scrollTo: ScrollToFunction
    }
}
