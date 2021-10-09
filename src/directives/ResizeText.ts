import { DirectiveOptions } from 'vue'

const defaultOption = {
  delay: 20,
  minSize: 16,
  maxSize: 40,
}

declare global {
  interface HTMLElement {
    __ctx: typeof defaultOption,
    __debounceHandler: () => void,
  }
}

const debounce = function (func: Function, wait: number, immediate?: boolean): () => void {
  let timeout = 0
  return function () {
    const args = arguments
    const later = function (): void {
      timeout = 0
      if (!immediate) func.apply(null, args)
    }

    const callNow = immediate && !timeout
    clearTimeout(timeout)
    // @ts-expect-error
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(null, args)
  }
}

const onResize = function ($element: HTMLElement, times = 0): void {
  const ctx = $element.__ctx
  const $parent = $element.parentElement

  if ($parent) {
    const parentStyle = getComputedStyle($parent)
    const elementStyle = getComputedStyle($element)

    const availableWidth = $parent.clientWidth - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeftWidth) - parseFloat(parentStyle.borderRightWidth)
    const currentWidth = $element.scrollWidth

    const previousFontSize = parseFloat(elementStyle.fontSize)
    const shrinkRatio = availableWidth / currentWidth

    const size = Math.min(
      Math.max(ctx.minSize, shrinkRatio * previousFontSize),
      ctx.maxSize,
    )

    const isWrap = size <= ctx.minSize

    $element.style.fontSize = `${size}px`
    $element.style.whiteSpace = isWrap ? 'normal' : 'nowrap'
    $element.style.wordBreak = isWrap ? 'break-all' : ''

    // console.log(isWrap, availableWidth, currentWidth, shrinkRatio, previousFontSize, size, $element.innerText)

    // For some emojis, it will not resize properly, we should resize multi times
    // We should use `element.scrollWidth` as it will invoke a rerender and return the current width
    if ($element.scrollWidth > availableWidth && times < 5) {
      onResize($element, ++times)
    }
  }
}

const isBrowser = typeof window !== 'undefined'

const directive: DirectiveOptions = {
  inserted (el, binding) {
    const option = binding.value
    const ctx = {
      ...defaultOption,
      ...option
    }

    el.__ctx = ctx
    el.__debounceHandler = debounce(() => onResize(el), ctx.delay)

    if (isBrowser) {
      window.addEventListener('resize', el.__debounceHandler, { passive: true })
      onResize(el)
    }
  },

  unbind (el) {
    if (isBrowser) {
      window.removeEventListener('resize', el.__debounceHandler)
    }
  }
}

export default directive
