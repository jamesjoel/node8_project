var express = require('express');
var router = express.Router();


router.get("/", function(req, res){
	// console.log("comming");
	var pagedata = { title : "Home", pagename : "home/index"};
	res.render("layout", pagedata);
});
// router.post("/", function(req, res){
	
// });
// router.put("/", function(req, res){
	
// });
// router.delete("/", function(req, res){
	
// });
// router.all("/", function(req, res){
	
// });

module.exports=router;
