import Vue, { DirectiveOptions, PluginObject } from "vue"

type ElementDescriptor = Element | string

export interface ScrollOptions {
  container?: ElementDescriptor
  duration?: number
  easing?: string
  offset?: number
  force?: boolean
  cancelable?: boolean
  onStart?: false | ((element: Element) => any)
  onDone?: false | ((element: Element) => any)
  onCancel?: false | ((event: Event, element: Element) => any)
  x?: boolean
  y?: boolean
}

type ScrollToFunction = (
  element: ElementDescriptor,
  duration?: number,
  options?: ScrollOptions,
) => () => void

declare const _default: PluginObject<ScrollOptions> &
  DirectiveOptions & {
    scrollTo: ScrollToFunction
  }

export default _default

declare module "vue/types/vue" {
  interface Vue {
    $scrollTo: ScrollToFunction
  }
}
