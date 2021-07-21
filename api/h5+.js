{
	//写
	const self = this;
	// 请求本地系统文件对象 plus.io.PRIVATE_WWW：应用运行资源目录常量
	plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fobject) {
		// fs.root是根目录操作对象DirectoryEntry
		fobject.root.getFile('/storage/emulated/0/test/1.txt', {
			create: true
		}, function(fileEntry) {
			fileEntry.file(function(file) {
				// create a FileWriter to write to the file
				fileEntry.createWriter(function(writer) {
					// Write data to file.
					//writer.seek(file.size)
					writer.write("Data");
				}, function(e) {
					console.log(e)
					self.resInfo = e;
				});
			});
		});
	});
} {
	//读5  
	fileReader: function() {
		const self = this;
		// 请求本地系统文件对象 plus.io.PRIVATE_WWW：应用运行资源目录常量
		plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fobject) {
			// fs.root是根目录操作对象DirectoryEntry
			fobject.root.getFile('config.xml', {
				create: true
			}, function(fileEntry) {
				fileEntry.file(function(file) {
					var fileReader = new plus.io.FileReader();
					self.resInfo = JSON.stringify(file);
					fileReader.readAsText(file, 'utf-8');
					fileReader.onloadend = function(evt) {
						self.resInfo = self.resInfo + '--' + JSON.stringify(evt);
					}
					self.resInfo = self.resInfo + '--' + file.size + '--' + file.name;
				});
			});
		});
	}
	let t = {
		"type": "loadend",
		"bubbles": false,
		"cancelBubble": false,
		"cancelable": false,
		"lengthComputable": false,
		"loaded": 0,
		"total": 0,
		"target": {
			"fileName": "/storage/emulated/0/test/1.txt",
			"readyState": 2,
			"result": "Data",
			"error": null,
			"onloadstart": null,
			"onprogress": null,
			"onload": null,
			"onabort": null,
			"onerror": null
		}
	}
}
