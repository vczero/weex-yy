

//App数据接口
//1) type表示不同的类型, 主要有config, it, manager, cookies, sanwen
//2)http://123.57.39.116:3000/data/read?type=config
var SERVER_PATH = 'http://123.57.39.116:3000/data/read?type=';


exports.getServerPath = function() {
	return SERVER_PATH;
};