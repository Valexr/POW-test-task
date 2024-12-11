export function resize(node: HTMLElement) {
    let CR: DOMRectReadOnly
    let ET: Element
    const ro = new ResizeObserver((entries, observer) => {
        for (let entry of entries) {
            CR = entry.contentRect
            ET = entry.target
        }
        node.dispatchEvent(new CustomEvent('resize', {
            detail: { CR, ET }
        }));
    });
    ro.observe(node);
    return {
        destroy() {
            ro.disconnect();
        }
    }
}

export function expand(node: HTMLTextAreaElement) {
    node.style.height = `${node.scrollHeight}px`;
    node.oninput = (_e) => {
        node.style.height = 'auto';
        node.style.height = `${node.scrollHeight}px`;
    };
}

export function submit(node: HTMLTextAreaElement) {
    node.onkeydown = async (e) => {
        if (e.key === 'Enter' && !e.shiftKey && node.value) {
            e.preventDefault();
            // node.form?.submit();
            node.form?.dispatchEvent(new CustomEvent('submit', { detail: e }));
        }
    };
}