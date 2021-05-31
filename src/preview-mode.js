import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router.js';

const rootClasses = `
	bg-yellow-200
	border-b-4
	border-yellow-600
	bottom-0
	fixed
	flex
	items-center
	mr-4
	pb-3
	pt-4
	px-6
	right-0
	rounded-t-lg
	shadow-xl
	space-x-3
	text-yellow-900
	z-50
`;

const labelClasses = `
	font-bold
	text-sm
	uppercase
`;

const linkClasses = `
	bg-yellow-400
	border-l
	border-yellow-300
	font-medium
	px-2
	py-1
	rounded-full
	text-xs
	uppercase
`;

const PreviewMode = ({disableUrl}) => {
	const router = useRouter();

	if (router.isPreview === false) {
		return null;
	}

	return (
		<div className={rootClasses}>
			<span className={labelClasses}>Preview mode</span>
			<a className={linkClasses} href={disableUrl}>Exit</a>
		</div>
	);
};

PreviewMode.propTypes = {
	disableUrl: PropTypes.string.isRequired
};

export default PreviewMode;
