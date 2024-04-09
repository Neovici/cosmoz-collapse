const defaults: Partial<KeyframeAnimationOptions> = { duration: 250 };

export type SizeP = 'width' | 'height';

export const toggleSize =
	(prop: SizeP) =>
	<T extends HTMLElement>(
		el: T,
		visible?: boolean,
		opts?: Partial<KeyframeAnimationOptions>
	) => {
		const maxSizeProp = 'max' + prop.charAt(0).toUpperCase() + prop.slice(1);
		Object.assign(el.style, { [maxSizeProp]: '', display: '' });
		const { [prop]: size } = el.getBoundingClientRect(),
			kf = [0, size],
			[from, to] = visible ? kf : kf.slice().reverse(),
			anim = el.animate(
				[{ [maxSizeProp]: `${from}px` }, { [maxSizeProp]: `${to}px` }],
				{ ...defaults, ...opts }
			);

		anim.onfinish = () =>
			Object.assign(el.style, {
				[maxSizeProp]: '',
				display: visible ? '' : 'none',
			});
	};
