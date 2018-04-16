# Plotter
A Node Module for plotting Graphs in SVG.

## API

* [Canvas](#canvas)
* [Vertex](#vertex)
* [Edge](#edge)
* [Graph](#graph)

## Canvas

Canvas is the basement for every other element to be plotted.

## Vertex

Vertex is used to denote a point in plane. This is the smallest unit in the module.

**Syntax**
```
  import {Vertex} from 'plotter-js';

  var v = new Vertex(x_cord/*number*/,y_cord/*number*/,radius/*number*/,style/*Graphic*/);
```
* **x_cord:** X-Coordinate of point
* **y_cord:** Y-Coordinate of point
* **radius:** Radius of the circle used to denote a point when plotted in canvas.

## Edge

## Graph
