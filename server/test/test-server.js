var app = require('../server.js').app;
var request = require('supertest');
var expect = require('chai').expect;

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('Front Page', function(req,res) {
  it('should be able to access the front page', function(done) {
    request(app)
    .get('/')
    .expect(202)
    .end(function(err){
      if (err){
        throw err
      };
    })
    done();
  });
  
});

describe('USER',function(req,res){
  it('should Create and return a new User',function(done){
    request(app)
    done();
  })
  
  it('should Read User object', function(done){
    request(app)
    .get('/users')
    .expect(202)
    .end(function(err){
      if(err){
        throw err
      };
    })
    done();
  });
  
  it('should Update User object')
  it('should Delete User object')
  
});

describe('PORTFOLIO',function(req,res){
  it('should Create Portfolio object')
  it('should Read Portfolio object')
  it('should Update Portfolio object')
  it('should Delete Portfolio object')
});