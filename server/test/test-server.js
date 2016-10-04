var app = require('../server.js').app;
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);
  it('should be able to run a test',function(done){
    (true).should.equal(true);
    done();
  });
  it('should be able to access the front page',function(done){
    chai.request(app)
    .get('/')
    .end(function(err,res){
      should.equal(err,null);
      res.should.have.status(202);
      done();
    });
  });