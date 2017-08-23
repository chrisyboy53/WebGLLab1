var lab = lab || {};

lab.app = (function (square, program) {
    var module = {};

    module.init = function() {
        console.debug('Initiating application');
        
        program.init();
        
        console.debug('Begin drawing scene');
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        var positionLocation = gl.getAttribLocation(program.program, 'a_position');
        var bufferData = square.createDataBuffer();

        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, bufferData.vectorSize, bufferData.vectorType, false, 0, 0);

        gl.drawArrays(gl.TRIANGLES, 0, bufferData.items);
        console.debug('Finished drawing scene');
    }

    return module;
})(lab.square, lab.glProgram);