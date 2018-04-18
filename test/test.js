'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

var v = new index.Vertex(0,0,5);
var u = new index.Vertex(4,4,5);
var t = new index.Vertex(0,-5,5);
var s = new index.Vertex(5,Math.sqrt(75),5);

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
    var g = new index.Graph([u,v],[new index.Edge(u,v)]);
    expect(g).to.be.an.instanceOf(index.Graph);
    expect(g.union(g)).to.be.an.instanceOf(index.Graph);
    expect(g.intersection(g)).to.be.an.instanceOf(index.Graph);
    expect(g.subtract(g)).to.be.an.instanceOf(index.Graph);
    expect(g.join(new index.Graph([t,s],[new index.Edge(t,s)]))).to.be.an.instanceOf(index.Graph);
    expect(g.join(new index.Graph([u],[]))).to.equal(null);
    expect(g.copy()).to.be.an.instanceOf(index.Graph);
    expect(g).to.respondTo('rotate');
    expect(g).to.respondTo('translate');
    expect(g).to.respondTo('scale');
    expect(g).to.respondTo('plot');
    expect(g).to.respondTo('rePaint');
    expect(g).to.respondTo('remove');
  });
  it('Star', () => {
    var s = new index.Star(u,v,5,5);
    expect(s).to.be.an.instanceOf(index.Star);
    var c = s.centroid();
    expect(c.x).to.be.closeTo(u.x,0.0001);
    expect(c.y).to.be.closeTo(u.y,0.0001);
  });
  it('Mesh', () => {
    expect(new index.Mesh(u,v,5,5)).to.be.an.instanceOf(index.Mesh);
  });
  it('Shape', () => {
    var sh = new index.Shape([]);
    expect(sh).to.be.an.instanceOf(index.Shape);
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
    var tr = new index.Triangle(v,5,10,Math.PI/4);
    expect(tr).to.be.an.instanceOf(index.Triangle);
  });
  it('RightTriangle', () => {
    var rt = new index.RightTriangle(u,50,60);
    expect(rt).to.be.an.instanceOf(index.RightTriangle);
    expect(rt.angle(0)).to.be.closeTo(Math.PI/2,0.0001);
  });
  it('EquiTriangle', () => {
    var et = new index.EquiTriangle(u,50);
    expect(et).to.be.an.instanceOf(index.EquiTriangle);
    expect(et.length(0)).to.be.closeTo(et.length(1),0.0001);
    expect(et.length(1)).to.be.closeTo(et.length(2),0.0001);
    expect(et.angle(0)).to.be.closeTo(Math.PI/3,0.0001);
  });
  it('IsoTriangle', () => {
    var ist = new index.IsoTriangle(u,50,60)
    expect(ist).to.be.an.instanceOf(index.IsoTriangle);
    expect(ist.length(1)).to.be.closeTo(ist.length(2),0.0001);
    expect(ist.angle(0)).to.be.closeTo(ist.angle(1),0.0001);
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
