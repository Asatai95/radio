export type NodeType = Element | HTMLElement | DocumentFragment;

export class DOM {
    private parser: DOMParser = new DOMParser();
    el: NodeType = null;

    constructor(node?: NodeType | string) {
        if (typeof node === 'string' && !/[<>]/.test(node)) {
            this.el = document.querySelector(node) as NodeType;
        } else if (typeof node === 'string' && /[<>]/.test(node)) {
            const collection: NodeList = this.parser.parseFromString(node, 'text/html').body.childNodes;
            const doms: Element[] = [].slice.call(collection) as Element[];
            if (doms.filter((e: Element) => !(e instanceof Text)).length === 1) {
                this.el = doms[0];
            } else {
                this.el = document.createElement('div');
                const fragment: DocumentFragment = document.createDocumentFragment();
                for (let [i, l]: number[] = [0, doms.length]; i < l; i++) fragment.appendChild(doms[i]);
                this.el.appendChild(fragment);
            }
        } else if (node instanceof Element || node instanceof DocumentFragment) {
            this.el = node;
        } else {
            this.el = document.createDocumentFragment();
        }
    }

    public append(childNode: NodeType | string): Element | DocumentFragment | boolean {
        if (typeof childNode === 'string' && this.el) {
            const fragment: DocumentFragment = document.createDocumentFragment();
            const collection: NodeList = this.parser.parseFromString(childNode, 'text/html').body.childNodes;
            const doms: Element[] = [].slice.call(collection) as Element[];
            for (let [i, l]: number[] = [0, doms.length]; i < l; i++) fragment.appendChild(doms[i]);
            this.el.appendChild(fragment);
            return false;
        } else if (childNode instanceof Element || childNode instanceof DocumentFragment) {
            this.el.appendChild(childNode);
            return false;
        } else {
            return this.el;
        }
    }
}
