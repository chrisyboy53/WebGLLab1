var canvas = document.getElementsByTagName('canvas')[0];

var dimensions = canvas.getClientRects();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gl = canvas.getContext('experimental-webgl');
gl.viewportWidth = canvas.width;
gl.viewportHeight = canvas.height;

document.addEventListener('DOMContentLoaded', lab.app.init);
