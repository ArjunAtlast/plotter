# Plotter
A Node Module for plotting Graphs in SVG.

[![Build Status](https://travis-ci.org/ArjunAtlast/plotter.svg?branch=master)](https://travis-ci.org/ArjunAtlast/plotter)
[![Coverage Status](https://coveralls.io/repos/github/ArjunAtlast/plotter/badge.svg?branch=master)](https://coveralls.io/github/ArjunAtlast/plotter?branch=master)

## API

* [Canvas](#canvas)
* [Vertex](#vertex)
* [Edge](#edge)
* [Graphic](#graphic)
* [Graph](#graph)
* [Plottable](#plottable)
* [Graph Types](#graph-types)

## Canvas

Canvas is the basement for every other element to be plotted.

### Syntax
```javascript
  import {Canvas} from 'plotter-js';

  var v = new Canvas(width/*number*/, height/*number*/, container/*HTMLElement*/, name/*string*/);
```
* **width:** Width of the canvas.
* **height:** Height of the canvas.
* **container:** HTML DOM element which contains the canvas(Where all your plotted graphs appear).
* **name:** A unique name for the canvas.

### Methods

**init():boolean**

Initialize the canvas.*(canvas can be used only after initializing)*.
Returns **true** if successful else **false**.

*Usage*
```javascript
  ...
  var canvas = new Canvas(...);
  canvas.init();
  ...
```


## Vertex

Vertex is used to denote a point in plane. This is the smallest unit in the module.

### Syntax
```javascript
  import {Vertex} from 'plotter-js';

  var v = new Vertex(x_cord/*number*/,y_cord/*number*/,radius/*number*/,style/*Graphic*/);
```
* **x_cord:** X-Coordinate of point.
* **y_cord:** Y-Coordinate of point.
* **radius:** Radius of the circle used to denote a point when plotted in canvas.
* **style:** Styles the appearance of vertex when plotted.*(optional)*

### Methods

**style(graphic:Graphic):void**

Set the style of the vertex.

*Usage*
```javascript
  //...
  var v = new Vertex(...);

  var g = new Graphic(...);

  v.style(g);
  //...
```

**plot(canvas: Canvas):void**

Plot the vertex into the canvas.

*Usage*
```javascript
  //...

  var c = new Canvas(...);

  //...

  var v = new Vertex(...);

  //...

  v.plot(c);
  //...
```

**rePaint():void**

Re-render the vertex into the canvas.
> *Note:* Any changes made to the Vertex object will only take effect after calling rePaint.

*Usage*
```javascript
  //...

  var v = new Vertex(...);

  //...

  v.x = 20; //Modifying the value of X-Coordinate
  v.rePaint();
  //...
```

**remove():void**

  Remove the plotted vertex from canvas.

*Usage*
```javascript
  //...

  var v = new Vertex(...);

  //...

  v.remove();
  //...
```

**link(object:Plottable):void, link(objects:Plottable[]):void**

Link plottable object/objects to the vertex. Linked objects get automatically repainted or removed when the vertex is repainted or removed.

> *Note:* The object to be linked must have their own rePaint and remove method.

*Usage*
```javascript
//...
var v = new Vertex(...);

//...

  var e = new Edge(...);
  var a = new Edge(...);

  //...

  v.link(e); //link single Edge
  v.linkMultiple([e,a,..]); //link multiple edges
//...
```

**unlink(object:Plottable):void, unlinkMultiple(objects:Plottable[]):void, unlinkAll():void**

Unlink linked object/objects from the vertex.

> *Note:* unlinkAll unlinks all the linked objects from the vertex.

*Usage*

```javascript
//...

var v = new Vertex(...);

//...

  var e = new Edge(...);
  var a = new Edge(...);

  //...

  v.link(e);
  v.linkMultiple([e,a,..]);

  //...

  v.unlink(e); //unlink single edge OR
  v.unlink([e,a]); //unlink multiple edges OR
  v.unlinkAll(); //unlink every linked object from the vertex
//...
```

**angleTo(v: Vertex): number**

Calculate the angle subtended to the vertex by another vertex.

*Usage*

```javascript
//...

  var v = new Vertex(...);
  var u = new Vertex(...);

  //...

  var angle = v.angleTo(u);
//...
```

**distanceFrom(v: Vertex): number**

Calculate distance of the vertex from another vertex.

*Usage*

```javascript
//...

  var v = new Vertex(...);
  var u = new Vertex(...);

  //...

  var distance = v.distanceFrom(u);
//...
```

**vertexAt(angle: number, distance: number, radius: number, graphic?:Graphic): Vertex**

Create a vertex which is at a given distance and angle from this vertex.

*Usage*

```javascript
//...

  var v = new Vertex(...);

  //...

  var u = v.vertexAt(Math.PI/4, 30, ...); //creates a vertex i.e., at an angle of 45 degrees and 30 points away from the vertex v.
//...
```

**rotate(axis:Vertex, angle:number):void,**

Rotate the vertex for a given angle with given axis as center.

**translate(x: number, y:number):void**

Move the vertex by an offset (x,y)

**scale(axis: Vertex, ratio:number):void**

Scaling the vertex actually tranforms the vertex moving farther or closer to the axis based on the ratio.

> The *rotate, translate, scale* are tranform methods.

> *Note:* The changes made using tranform methods won't take effect in canvas unless you repaint the vertex.

*Usage*
```javascript

//...

  var v = new Vertex(...);
  var u = new Vertex(...);

  //...

  v.rotate(u, Math.PI/2); //rotate 90 degrees with u as center
  v.translate(5,10); //move v to a location (v.x+5,v.y+10)
  v.scale(u, 2); //double the distance of v from u along the same angle

//...
```

## Edge

Denotes the line connecting two vertices.

### Syntax

```javascript
  import {Edge} from 'plotter-js';

  var v = new Edge(start/*Vertex*/,end/*Vertex*/,style/*Graphic*/);
```

* **start:** Starting vertex of edge.
* **end:** Ending vertex of edge.
* **style:** Styles the appearance of edge when plotted.*(optional)*

### Methods

* **style(graphic:Graphic):void**
* **plot(canvas: Canvas):void**
* **rePaint():void**
* **remove():void**

> All methods work similiar to that of [Vertex](#vertex)


## Graphic

Used to style any plottable object.

### Syntax

```javascript
  import {Graphic} from 'plotter-js';

  var g = new Graphic(fill/*string*/, stroke/*string*/,strokeWidth/*number*/);
```
* **fill:** Fill color
* **stroke:** Stroke color
* **strokeWidth:** Thickness of the stroke *(default:1)*

> *Note:* Every plottable use a default graphic with fill:#fdfdfd, stroke: #2e2e2e and strokeWidth: 5 is used unless anything is specified.

### Methods

**centroid(): Vertex**

Finds centroid of the Graph.

*Usage*

```javascript

  //...

  var g = new Graph(...);

  //...

  var c = g.centroid();

  //...
```

**copy(): Graph**

Creates a copy of the current graph.

> *Note:* assignment operator '=' cannot be used to copy a graph since it is a referencial structure.
> copy() function creates copy of each vertex and edge involved in the graph.

*Usage*

```javascript

  //...

  var g = new Graph(...);

  //...

  var g2 = g.copy();

  //...
```
**rotate(angle:number, axis:Vertex):void, translate(x:number, y:number):void, scale(angle:number, axis:Vertex)**

Transform the graph.

*If no axis is given, the centroid of graph is taken as the axis*

```javascript

  //...

  var g = new Graph(...);
  var v = new Vertex(...)

  //...

  g.rotate(Math.PI/3); //rotate 60 degrees
  g.translate(5,4); //move 5 points along x axis and 4 points along y axis.
  g.scale(2,v); //scale graph with v as center.

  //...
```
**join(graph: Graph, edge_graphic?: Graphic):Graph|null**

Create a new Graph connecting the corresponding vertices of both graphs.

>*Note:* Both graphs must have same number of vertices. If not the function returns null.

**union(graph: Graph):Graph, intersection(graph: Graph):Graph, subtract(graph: Graph):Graph**

Creates a new Graph by union, intersection or subtraction of vertices and edges of both graphs.

**plot(canvas: Canvas):void, rePaint():void, remove():void**

## Plottable

It is the base interface of Vertex, Edge and Graph. Any object to be plotted on the canvas must implement Plottable.

### Usage

```javascript
  import {Plottable} from 'plotter-js';

  class CustomPlottable implements Plottable {
    //...
  }
```

### Abstract Methods

* **plot(canvas:Canvas):void**
* **rePaint():void**
* **remove():void**

## Graph Types

### Star

Create a star network graph with a core and many nodes.


#### Syntax

```javascript
  import {Star} from 'plotter-js';

  var g = new Star(core/*Vertex*/, node/*Vertex*/, node_count/*number*/, radius/*number*/, edge_style/*Graphic(optional)*/);
```

### Mesh

Create a mesh network graph with a core and many nodes.

#### Syntax

```javascript
  import {Mesh} from 'plotter-js';

  var g = new Mesh(core/*Vertex*/, node/*Vertex*/, node_count/*number*/, radius/*number*/, edge_style/*Graphic(optional)*/);
```

### Shape

A Circuit from an ordered list of vertices.

#### Syntax

```javascript
  import {Shape} from 'plotter-js';

  var g = new Shape(points/*Vertex[]*/, edge_style/*Graphic(optional)*/);
```

### Path

A Path from an ordered list of vertices.

> *Note:* Apart from shape a path may not be closed

#### Syntax

```javascript
  import {Path} from 'plotter-js';

  var g = new Path(points/*Vertex[]*/, edge_style/*Graphic(optional)*/);
```

### Polygon

A regular polygon formed from a center point and number of sides.

#### Syntax

```javascript
  import {Polygon} from 'plotter-js';

  var g = new Polygon(center/*Vertex*/, sides/*number*/,  radius/*number*/, basePoint/*Vertex*/, edge_style/*Graphic(optional)*/);
```

### Quadrilaterals

* **Parallelogram**
* **Rhombus**
* **Rectangle**
* **Square**
* **Trapezoid**

#### Syntax

```javascript
  import {Parallelogram, Rhombus, Rectangle, Square, Trapezoid} from 'plotter-js';

  var par = new Parallelogram(beginVertex/*Vertex*/, length/*number*/, height/*number*/, slant_height/*number*/, edge_style/*Graphic(optional)*/);

  var rho = new Rhombus(beginVertex/*Vertex*/, length/*number*/, height/*number*/, edge_style/*Graphic(optional)*/);

  var rect = new Rectangle(beginVertex/*Vertex*/, length/*number*/, height/*number*/, edge_style/*Graphic(optional)*/);

  var squ = new Rectangle(beginVertex/*Vertex*/, length/*number*/, edge_style/*Graphic(optional)*/);

  var tra = new Trapezoid(baseVertex/*Vertex*/, base_length/*number*/, height/*number*/, left_slant_height/*number*/, right_slant_height/*number*/, edge_style/*Graphic(optional)*/)

```

### Triangles

* **Triangle**
* **RightTriangle**
* **EquiTriangle**
* **IsoTriangle**

#### Syntax

```javascript
import {Triangle, RightTriangle, EquiTriangle, IsoTriangle} from 'plotter-js';

var t = new Triangle(baseVertex/*Vertex*/, s1/*number*/, s2/*number*/, angle/*number*/, edge_style/* Graphic(optional)*/);

var rt = new RightTriangle(baseVertex/*Vertex*/, baseLength/*number*/, height/*number*/, edge_style/* Graphic(optional)*/);

var et = new EquiTriangle(baseVertex/*Vertex*/, sideLength/*number*/, edge_style/* Graphic(optional)*/);

var it = new IsoTriangle(baseVertex/*Vertex*/, baseLength/*number*/, sideLength/*number*/, edge_style/* Graphic(optional)*/);
```
