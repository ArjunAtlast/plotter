'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

var v = new index.Vertex(0,0,5);
var u = new index.Vertex(4,4,5);
var t = new index.Vertex(0,-5,5);
var s = new index.Vertex(5,Math.sqrt(75),5);

describe('calculate Angle Test', () => {
  it('should be close to 0', () => {
    var result = v.angleTo(v);
    expect(result).to.be.closeTo(0,0.0001);
  });
  it('should be close to PI/4', () => {
    var result = v.angleTo(u);
    expect(result).to.be.closeTo(Math.PI/4,0.0001);
  });
  it('should be close to 3*PI/2', () => {
    var result = v.angleTo(t);
    expect(result).to.be.closeTo(3*Math.PI/2,0.0001);
  });
  it('should be close to PI/3', () => {
    var result = v.angleTo(s);
    expect(result).to.be.closeTo(Math.PI/3,0.0001);
  });
});

describe('Test vertexAt ', () => {
  it('should be close to 5', () => {
    var result = v.vertexAt(0,5,5).x;
    expect(result).to.be.closeTo(5,0.0001);
  });
  it('should be close to sqrt(8)', () => {
    var result = v.vertexAt(Math.PI/4,4,5).x;
    expect(result).to.be.closeTo(Math.sqrt(8),0.0001);
  });
  it('should be close to 0', () => {
    var result = v.vertexAt(Math.PI/2,5,5).x;
    expect(result).to.be.closeTo(0,0.0001);
  });
  it('should be close to -5', () => {
    var result = v.vertexAt(Math.PI,5,5).x;
    expect(result).to.be.closeTo(-5,0.0001);
  });

  //y Coordinate
  it('should be close to 0', () => {
    var result = v.vertexAt(0,5,5).y;
    expect(result).to.be.closeTo(0,0.0001);
  });
  it('should be close to sqrt(8)', () => {
    var result = v.vertexAt(Math.PI/4,4,5).y;
    expect(result).to.be.closeTo(Math.sqrt(8),0.0001);
  });
  it('should be close to 5', () => {
    var result = v.vertexAt(Math.PI/2,5,5).y;
    expect(result).to.be.closeTo(5,0.0001);
  });
  it('should be close to -5', () => {
    var result = v.vertexAt(3*Math.PI/2,5,5).y;
    expect(result).to.be.closeTo(-5,0.0001);
  });
});