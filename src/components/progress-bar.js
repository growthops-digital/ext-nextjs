import React, {createContext, useContext, useMemo} from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router.js';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const Context = createContext();

const useProgressBar = () => useContext(Context);

const enableProgressBar = () => NProgress.start();
const disableProgressBar = () => NProgress.done();

const ProgressBar = ({children}) => {
	const contextData = useMemo(() => ({
		enableProgressBar,
		disableProgressBar,
	}), []);

	return (
		<Context.Provider value={contextData}>
			{children}
		</Context.Provider>
	);
};

ProgressBar.propTypes = {
	children: PropTypes.node,
};

export {
	useProgressBar,
};

export default ProgressBar;
