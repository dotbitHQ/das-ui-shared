import { DirectiveOptions } from 'vue';
declare const defaultOption: {
    delay: number;
    minSize: number;
    maxSize: number;
};
declare global {
    interface HTMLElement {
        __ctx: typeof defaultOption;
        __debounceHandler: () => void;
    }
}
declare const directive: DirectiveOptions;
export default directive;
