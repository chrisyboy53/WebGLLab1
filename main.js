var canvas = document.getElementsByTagName('canvas')[0];

var dimensions = canvas.getClientRects();

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var gl = canvas.getContext('experimental-webgl');
gl.viewportWidth = canvas.width;
gl.viewportHeight = canvas.height;

document.addEventListener('DOMContentLoaded', lab.app.init);
