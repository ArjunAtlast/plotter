# Plotter
A Node Module for plotting Graphs in SVG.

## API

* [Canvas](#canvas)
* [Vertex](#vertex)
* [Edge](#edge)
* [Graph](#graph)

## Canvas

Canvas is the basement for every other element to be plotted.

**Syntax**
```javascript
  import {Canvas} from 'plotter-js';

  var v = new Canvas(width/*number*/, height/*number*/, container/*HTMLElement*/, name/*string*/);
```
* **width:** Width of the canvas.
* **height:** Height of the canvas.
* **container:** HTML DOM element which contains the canvas(Where all your plotted graphs appear).
* **name:** A unique name for the canvas.
### Methods

**boolean init()**

Initialize the canvas.*(canvas can be used only after initializing)*. Return **true** if successful else **false**.


## Vertex

Vertex is used to denote a point in plane. This is the smallest unit in the module.

**Syntax**
```javascript
  import {Vertex} from 'plotter-js';

  var v = new Vertex(x_cord/*number*/,y_cord/*number*/,radius/*number*/,style/*Graphic*/);
```
* **x_cord:** X-Coordinate of point.
* **y_cord:** Y-Coordinate of point.
* **radius:** Radius of the circle used to denote a point when plotted in canvas.
* **style:** Styles the appearance of vertex when plotted.*(optional)*



## Edge

## Graph
