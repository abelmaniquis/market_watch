const {expect} = require('chai');
const React = require('react');
var request = require('supertest');
var chai = require('chai');
var app = require('../server/server');

describe('Simple test',()=>{
  it('should perform a simple test',() =>{
    expect(true).to.equal(true) 
  });
});

describe('USERS',function(){
  it('should get all the users',function(done){
    request(app)
    .get('/users')
    .expect(202)
  })
});
