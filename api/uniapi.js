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
{
	uni.getSavedFileInfo({
	  filePath: '/storage/emulated/0/test/1.txt', //仅做示例用，非真正的文件路径
	  success: function (res) {
	    console.log(res.size);
	    console.log(res.createTime);
		console.log(res.errMsg,plus.device.model)
	  }
	});
}