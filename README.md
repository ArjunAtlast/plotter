# Plotter
A Node Module for plotting Graphs in SVG.

## API

* [Canvas](#canvas)
* [Vertex](#vertex)
* [Edge](#edge)
* [Graphic](#graphic)
* [Graph](#graph)

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
  ...
  var v = new Vertex(...);

  var g = new Graphic(...);

  v.style(g);
  ...
```

**plot(canvas: Canvas):void**

Plot the vertex into the canvas.

*Usage*
```javascript
  ...

  var c = new Canvas(...);
  ...
  var v = new Vertex(...);
  ...
  v.plot(c);
  ...
```

**rePaint():void**

Re-render the vertex into the canvas.
> *Note:* Any changes made to the Vertex object will only take effect after calling rePaint.

*Usage*
```javascript
  ...
  ...
  var v = new Vertex(...);
  ...
  v.plot(..);
  ...
  ...
  v.x = 20; //Modifying the value of X-Coordinate
  v.rePaint();
  ...
```

**remove():void**

  Remove the plotted vertex from canvas.

*Usage*
```javascript
  ...
  ...
  var v = new Vertex(...);
  ...
  v.plot(..);
  ...
  v.remove();
  ...
```

**link(object:Plottable):void, link(objects:Plottable[]):void**

Link plottable object/objects to the vertex. Linked objects get automatically repainted or removed when the vertex is repainted or removed.

> *Note:* The object to be linked must have their own rePaint and remove method.

*Usage*
```javascript
...
var v = new Vertex(...);
...
var e = new Edge(...);
var a = new Edge(...);

...

v.link(e); //link single Edge
v.linkMultiple([e,a,..]); //link multiple edges
...
```

**unlink(object:Plottable):void, unlinkMultiple(objects:Plottable[]):void, unlinkAll():void**

Unlink linked object/objects from the vertex.

> *Note:* unlinkAll unlinks all the linked objects from the vertex.

*Usage*

```javascript
...
var v = new Vertex(...);
...
var e = new Edge(...);
var a = new Edge(...);

...

v.link(e);
v.linkMultiple([e,a,..]);

...

v.unlink(e); //unlink single edge OR
v.unlink([e,a]); //unlink multiple edges OR
v.unlinkAll(); //unlink every linked object from the vertex
...
```

**angleTo(v: Vertex): number**

Calculate the angle subtended to the vertex by another vertex.

*Usage*

```javascript
...
var v = new Vertex(...);
...
var u = new Vertex(...);

...

var angle = v.angleTo(u);
...
```

**distanceFrom(v: Vertex): number**

Calculate distance of the vertex from another vertex.

*Usage*

```javascript
...
var v = new Vertex(...);
...
var u = new Vertex(...);

...

var distance = v.distanceFrom(u);
...
```

**vertexAt(angle: number, distance: number, radius: number, graphic?:Graphic): Vertex**

Create a vertex which is at a given distance and angle from this vertex.

*Usage*

```javascript
...
var v = new Vertex(...);
...
var u = v.vertexAt(Math.PI/4, 30, ...); //creates a vertex i.e., at an angle of 45 degrees and 30 points away from the vertex v.
...
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
...
var v = new Vertex(...);
...
var u = new Vertex(...);

...

v.rotate(u, Math.PI/2); //rotate 90 degrees with u as center
v.translate(5,10); //move v to a location (v.x+5,v.y+10)
v.scale(u, 2); //double the distance of v from u along the same angle
...
```

## Edge

Denotes the line connecting two vertices.

### Syntax

```javascript
  import {Edge} from 'plotter-js';

  var v = new Edge(start/*Vertex*/,end/*Vertex*/,style/*Graphic*/);
```

**start:** Starting vertex of edge.
**end:** Ending vertex of edge.
**style:** Styles the appearance of edge when plotted.*(optional)*

### Methods

**style(graphic:Graphic):void**

**plot(canvas: Canvas):void**

**rePaint():void**

**remove():void**

> All methods work similiar to that of [Vertex](#vertex)


## Graphic

Used to style any plottable object.
