'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

var v = new index.Vertex(0,0,5);
var u = new index.Vertex(4,4,5);
var t = new index.Vertex(0,-5,5);
var s = new index.Vertex(5,Math.sqrt(75),5);

var tr = new index.Triangle(v,5,10,Math.PI/4);

describe('checking Components', () => {
  it('Vertex', () => {
    expect(v).to.be.an.instanceOf(index.Vertex);
  });
  it('Edge', () => {
    expect(new index.Edge(u,v)).to.be.an.instanceOf(index.Edge);
  });
  it('Graphic', () => {
    expect(new index.Graphic("#fdfdfd", "#2e2e2e", 5)).to.be.an.instanceOf(index.Graphic);
  });
  it('Graph', () => {
    expect(new index.Graph([],[])).to.be.an.instanceOf(index.Graph);
  });
  it('Star', () => {
    expect(new index.Star(u,v,5,5)).to.be.an.instanceOf(index.Star);
  });
  it('Mesh', () => {
    expect(new index.Mesh(u,v,5,5)).to.be.an.instanceOf(index.Mesh);
  });
  it('Shape', () => {
    expect(new index.Shape([])).to.be.an.instanceOf(index.Shape);
  });
  it('Path', () => {
    expect(new index.Path([])).to.be.an.instanceOf(index.Path);
  });
  it('Polygon', () => {
    expect(new index.Polygon(u,5,5,v)).to.be.an.instanceOf(index.Polygon);
  });
  it('Parallellogram', () => {
    expect(new index.Parallellogram(u,50,50,75)).to.be.an.instanceOf(index.Parallellogram);
  });
  it('Rhombus', () => {
    expect(new index.Rhombus(u,50,75)).to.be.an.instanceOf(index.Rhombus);
  });
  it('Rectangle', () => {
    expect(new index.Rectangle(u,50,75)).to.be.an.instanceOf(index.Rectangle);
  });
  it('Square', () => {
    expect(new index.Square(u,50)).to.be.an.instanceOf(index.Square);
  });
  it('Trapezoid', () => {
    expect(new index.Trapezoid(u,50,75,30,45)).to.be.an.instanceOf(index.Trapezoid);
  });
  it('Triangle', () => {
    expect(tr).to.be.an.instanceOf(index.Triangle);
  });
  it('RightTriangle', () => {
    expect(new index.RightTriangle(u,50,60)).to.be.an.instanceOf(index.RightTriangle);
  });
  it('EquiTriangle', () => {
    expect(new index.EquiTriangle(u,50)).to.be.an.instanceOf(index.EquiTriangle);
  });
  it('IsoTriangle', () => {
    expect(new index.IsoTriangle(u,50,60)).to.be.an.instanceOf(index.IsoTriangle);
  });
  it('Step', () => {
    expect(new index.Step(u,50,50,10)).to.be.an.instanceOf(index.Step);
  });
  it('Wave', () => {
    expect(new index.Wave(new index.Path([u]))).to.be.an.instanceOf(index.Wave);
    expect(new index.Wave(new index.Path([]))).to.be.an.instanceOf(index.Wave);
    expect(new index.Wave(new index.Path([u,v]))).to.be.an.instanceOf(index.Wave);
  });
});

describe('calculate Angle Test', () => {
  it('should be close to 0', () => {
    var result = v.angleTo(v);
    expect(result).to.be.closeTo(0,0.0001);
  });
  it('should be close to PI/4', () => {
    var result = v.angleTo(u);
    expect(result).to.be.closeTo(Math.PI/4,0.0001);
  });
  it('should be close to -PI/2', () => {
    var result = v.angleTo(t);
    expect(result).to.be.closeTo(-Math.PI/2,0.0001);
  });
  it('should be close to PI/3', () => {
    var result = v.angleTo(s);
    expect(result).to.be.closeTo(Math.PI/3,0.0001);
  });
});

describe('check tranform methods', () => {
  it('translate()', () => {
    t.translate(5,5);
    expect(t.x).to.be.closeTo(5,0.0001);
    expect(t.y).to.be.closeTo(0,0.0001);
  });
  it('rotate()', () => {
    t.rotate(v,Math.PI/2);
    expect(t.x).to.be.closeTo(0,0.0001);
    expect(t.y).to.be.closeTo(5,0.0001);
  });
  it('scale()', () => {
    t.scale(v,2);
    expect(t.x).to.be.closeTo(0,0.0001);
    expect(t.y).to.be.closeTo(10,0.0001);
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

describe('Test triangle functions', () => {
  it('should be close to 7.368', () => {
    var result = tr.length(1);
    expect(result).to.be.closeTo(7.368,0.001);
  });
  it('should be close to 1.856', () => {
    var result = tr.angle(1);
    expect(result).to.be.closeTo(1.856,0.001);
  });

});
