# GrowthOps Ext Next.js

A collection of useful components, helpers, and extensions for Next.js projects.

## Components

### ProgressBar
Provides a wrapper around the `nprogress` package.

**Example**
```js
// <project>/pages/_app.js

import React from 'react';
import App from 'next/app.js';
import {ProgressBar} from '@growthops/ext-nextjs/components';

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<ProgressBar>
				<Component {...pageProps}/>
			</ProgressBar>
		);
	}
}
```

### PreviewMode
A small floating "preview mode" component.

**Example**
```js
// <project>/pages/_app.js

import React from 'react';
import App from 'next/app.js';
import {ProgressBar, PreviewMode} from '@growthops/ext-nextjs/components';

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<ProgressBar>
				<Component {...pageProps}/>
				<PreviewMode disableUrl="/api/preview-mode/disable"/>
			</ProgressBar>
		);
	}
}
```
