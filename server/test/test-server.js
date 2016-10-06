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

describe('User Object',function(req,res){
  it('should Create User object')
  
  it('should Read User object')
  
  it('should Update User object')
  it('should Delete User object')
  
});

describe('Portfolio Object',function(req,res){
  it('should Create Portfolio object')
  it('should Read Portfolio object')
  it('should Update Portfolio object')
  it('should Delete Portfolio object')
});