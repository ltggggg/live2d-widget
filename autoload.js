$("<link>").attr({href: "https://github.com/ltggggg/live2d-widget.git/waifu.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
//waifu.css的绝对路径

$.ajax({
	url: 'https://github.com/ltggggg/live2d-widget.git/live2d.min.js',
	dataType:"script",
	cache: true,
	async: false
});
//live2d.min.js的绝对路径

$.ajax({
	url: 'https://github.com/ltggggg/live2d-widget.git/waifu-tips.js',
	dataType:"script",
	cache: true,
	async: false
});
//waifu-tips.js的绝对路径

// 初始化看板娘，会自动加载指定目录下的 waifu-tips.json
$(window).on("load", function() {
	initWidget("/lib/", "https://api.fghrsh.net/live2d");
});
//initWidget第一个参数为waifu-tips.json所在的文件夹，第二个参数为api地址
//api后端可自行搭建，参考https://github.com/fghrsh/live2d_api
