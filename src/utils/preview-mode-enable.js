const previewModeEnable = (request, response, secret, redirectTo = '/') => {
	if (request.query.secret !== secret) {
		response.redirect(307, redirectTo);

		return response.end();
	}

	response.setPreviewData({});
	response.redirect(307, redirectTo);

	return response.end();
};

export default previewModeEnable;
