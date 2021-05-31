const previewModeDisable = (response, redirectTo = '/') => {
	response.clearPreviewData();
	response.redirect(307, redirectTo);

	return response.end();
};

export default previewModeDisable;
