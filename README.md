# Plotter
A Node Module for plotting Graphs in SVG.

## API

* [Canvas](#canvas)
* [Vertex](#vertex)
* [Edge](#edge)
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

## Edge

## Graph
