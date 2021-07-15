{
	//保存文件
	uni.chooseImage({
		success: function(res) {
			var tempFilePaths = res.tempFilePaths;
			uni.saveFile({
				tempFilePath: tempFilePaths[0],
				success: function(res) {
					var savedFilePath = res.savedFilePath;
					console.log(res, res.savedFilePath)
				}
			});
		}
	});
}
 {
		"pagePath": "pages/test/test",
		"iconPath": "static/login-logo.png",
		"selectedIconPath": "static/login-logo.png",
		"text": "测试"
	}
