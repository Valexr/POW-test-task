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

export function expand(node: HTMLTextAreaElement, value: string) {
    update(value);

    return { update }

    function update(value: string) {
        node.style.height = value ? `${node.scrollHeight}px` : '';
    }
}

export function submit(node: HTMLTextAreaElement) {
    node.onkeydown = async (e) => {
        if (e.key === 'Enter' && !e.shiftKey && node.value) {
            e.preventDefault();
            const submiter = node.form?.querySelector('[type="submit"]') as HTMLElement;
            if (submiter) submiter.click();
        }
    };
}