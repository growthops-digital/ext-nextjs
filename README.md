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

## Utils

### previewModeEnable / previewModeDisable
Next.js preview mode API route helpers.

**Example**
```js
// <project>/pages/api/preview-mode/enable.js

import {previewModeEnable} from '@growthops/ext-nextjs/utils';

export default function preview(request, response) {
	return previewModeEnable(request, response, process.env.PREVIEW_MODE_SECRET);
}

// <project>/pages/api/preview-mode/disable.js

import {previewModeDisable} from '@growthops/ext-nextjs/utils';

export default function preview(request, response) {
	return previewModeDisable(response);
}
```

An optional `redirectTo` argument can be passed to either function as the last argument to customise the redirect path.

**Example**
```js
// <project>/pages/api/preview-mode/enable.js

import {previewModeEnable} from '@growthops/ext-nextjs/utils';

export default function preview(request, response) {
	return previewModeEnable(request, response, process.env.PREVIEW_MODE_SECRET, '/home');
}
```
