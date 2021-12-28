const defaults = { duration: 250 };

export const toggle = (el, visible, opts) => {
	Object.assign(el.style, { maxHeight: '', display: 'block' });
	const { height } = el.getBoundingClientRect(),
		kf = [0, height],
		[from, to] = visible ? kf : kf.slice().reverse(),
		anim = el.animate([{ maxHeight: `${ from }px` }, { maxHeight: `${ to }px` }], { ...defaults, ...opts });

	anim.onfinish = () => Object.assign(el.style, { maxHeight: '', display: visible ? '' : 'none' });
};
