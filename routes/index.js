var express = require('express');
var router = express.Router();

var Index=require('../models/studentmodel'); /*conect with studentmodel.js*/
var Index1=require('../models/teachermodel'); /*conect with teachermodel.js*/
var Index2=require('../models/exammodel'); /*conect with exammodel.js*/
var Index3=require('../models/departmentmodel'); /*conect with departmentmodel.js*/
var Index4=require('../models/coursemodel'); /*conect with coursemodel.js*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
//Student Data
router.get('/student', function(req, res, next) {
  res.render('student');
});

router.get('/stable',function(req,res,next){
	Index.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('stable',{info:results});
    	}
  	});
});



router.post('/student', function(req, res, next) {

var stdid = req.body.stdid;
var stdname = req.body.stdname;
var stddpt = req.body.stddpt;
var stdage = req.body.stdage;
var stdcn = req.body.stdcn;

console.log(stdid + " _" + stdname + "_" + stddpt + "_" + stdage + "_" + stdcn );
console.log("Login Sucessfully ");

var query={stdid:stdid};/*NEw pdate*/

Index.findOneAndUpdate(query,{
  $set:{
    stdname:stdname,
    stdid:stdid,
    stddpt:stddpt,
    stdage:stdage,
    stdcn:stdcn
  }
},{
  new:true,
  upsert:true
},function(err, doc){
  if (err) {
    console.log("Spmething Wrong!!!CANdy");
  }
});
  
  res.redirect('/stable');
});

//Teacher Data



router.get('/teacher', function(req, res, next) {
  res.render('teacher');
});

router.get('/ttable',function(req,res,next){
	Index1.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('ttable',{info:results});
    	}
  	});
});



router.post('/teacher', function(req, res, next) {

var tid = req.body.tid;
var tname = req.body.tname;
var tdpt = req.body.tdpt;
var tage = req.body.tage;
var tsl = req.body.tsl;

console.log(tid + " _" + tname + "_" + tdpt + "_" + tage + "_" + tsl );
console.log("Login Sucessfully ");

var query={tid:tid};/*NEw pdate*/

Index1.findOneAndUpdate(query,{
  $set:{
    tname:tname,
    tid:tid,
    tdpt:tdpt,
    tage:tage,
    tsl:tsl
  }
},{
  new:true,
  upsert:true
},function(err, doc){
  if (err) {
    console.log("Spmething Wrong!!!CANdy");
  }
});
  
  res.redirect('/ttable');
});

//exam Data

router.get('/exam', function(req, res, next) {
  res.render('exam');
});

router.get('/etable',function(req,res,next){
	Index2.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('etable',{info:results});
    	}
  	});
});




router.post('/exam', function(req, res, next) {

  var ename = req.body.ename;
  var emarks = req.body.emarks;
  var cname = req.body.cname;
  var ccode = req.body.ccode;
  var rno = req.body.rno;
  
  console.log(ename + " _" + emarks + "_" + cname + "_" + ccode + "_" + rno );
  console.log("Login Sucessfully ");
  
  var query={ename:ename};/*NEw pdate*/
  
  Index2.findOneAndUpdate(query,{
    $set:{
      ename:ename,
      emarks:emarks,
      cname:cname,
      ccode:ccode,
      rno:rno
    }
  },{
    new:true,
    upsert:true
  },function(err, doc){
    if (err) {
      console.log("Spmething Wrong!!!CANdy");
    }
  });
    
    res.redirect('/etable');
  });
  

//Departmet Data




router.get('/department', function(req, res, next) {
  res.render('department');
});

router.get('/dtable',function(req,res,next){
	Index3.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('dtable',{info:results});
    	}
  	});
});




router.post('/department', function(req, res, next) {

  var dname = req.body.dname;
  var sno = req.body.sno;
  var tno = req.body.tno;
  var active = req.body.active;
  var pos = req.body.pos;
  
  console.log(dname + " _" + sno + "_" + tno + "_" + active + "_" + pos );
  console.log("Login Sucessfully ");
  
  var query={dname:dname};/*NEw pdate*/
  
  Index3.findOneAndUpdate(query,{
    $set:{
      dname:dname,
      sno:sno,
      tno:tno,
      active:active,
      pos:pos
    }
  },{
    new:true,
    upsert:true
  },function(err, doc){
    if (err) {
      console.log("Spmething Wrong!!!CANdy");
    }
  });
    
    res.redirect('/dtable');
  });


//Course Data


router.get('/course', function(req, res, next) {
  res.render('course');
});

router.get('/ctable',function(req,res,next){
	Index4.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('ctable',{info:results});
    	}
  	});
});




router.post('/course', function(req, res, next) {

  var cfor = req.body.cfor;
  var coname = req.body.coname;
  var cocode = req.body.cocode;
  var coc = req.body.coc;
  var sem = req.body.sem;
  
  console.log(cfor + " _" + coname + "_" + cocode + "_" + coc + "_" + sem );
  console.log("Login Sucessfully ");
  
  var query={coname:coname,cocode:cocode};/*NEw pdate*/
  
  Index4.findOneAndUpdate(query,{
    $set:{
      cfor:cfor,
      coname:coname,
      cocode:cocode,
      coc:coc,
      sem:sem
    }
  },{
    new:true,
    upsert:true
  },function(err, doc){
    if (err) {
      console.log("Spmething Wrong!!!CANdy");
    }
  });
    
    res.redirect('/ctable');
  });






module.exports = router;
