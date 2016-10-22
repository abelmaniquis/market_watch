var app = require('../server.js').app;
var request = require('supertest');
var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

var User = require('../api/user/user.model.js');

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

  it('should read User object', function(done){
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
  
  it('should get an individual user',function(done){
    request(app)
    .get('/users/:id')
    .set('Accept','application/json')
    .expect(200)
    .end(function(err){
      if(err){
        throw err
      }
    });
    done();
  })
  
  it('should create and return a new User object',function(done){
    
    var someGuy = new User;
    
    someGuy.username = "some guy";
    someGuy.password = "secretpassword";
    someGuy.cash = 1000000;
    request(app)
    
    .post('api/users')
    .send(someGuy)
    .set('Accept','application/json')
    .expect('Content-type','application/json; charset=utf-8')
    .expect(202)
    .end(function(err,resp){
      if(err){
        throw err;
      }
      expect(resp.body).to.be.an('object');
      done();
    });
  });
  
  it('should Delete User object',function(done){
    var someGuy = new User
    someGuy.username = "someGuy"
    someGuy.password = "12345"
    someGuy.cash = 1000000
    console.log(someGuy);
    
    request(app)
    .post('/users')
    .send(someGuy)
    .set('Accept','application/json')
    .end(function(err,resp){
      if(err){
        throw err;
      }
      
      var user = resp.body;
      
      request(app)
      .delete('/users/' + user.id)
      .end(function(err,resp){
        if(err){
          throw err;
        }
        expect(resp.body).to.eql(user);
        done();
      });
    })
    
  });
  
});
/*
describe('PORTFOLIO',function(req,res){
  it('should Create Portfolio object')
  it('should Read Portfolio object')
  it('should Update Portfolio object')
  it('should Delete Portfolio object')
});*/