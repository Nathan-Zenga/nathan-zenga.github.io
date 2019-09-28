var mongoose = require('mongoose');

module.exports.gallery = mongoose.model('Gallery', mongoose.Schema({
	key: String,
	set_ID: String,
	label: String
}));

module.exports.design = mongoose.model('Design', mongoose.Schema({
	id: String,
	text: {
		client: String,
		tools: String,
		description: String
	},
	link: String
}));

module.exports.info_text = mongoose.model('Info-Text', mongoose.Schema({
	info: String
}));
