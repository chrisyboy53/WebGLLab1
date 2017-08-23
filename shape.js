var lab = lab || {};

lab.square = (function () {

    var self = {};

    var pVectors = new Float32Array([
        -0.5, -0.5,
        0.5, -0.5,
       -0.5,  0.5,
       -0.5,  0.5,
        0.5, -0.5,
        0.5,  0.5
    ]);

    /**
     * Create the GL buffer data
     * @returns object Gives out the vector size and gl type
     */
    function createDataBuffer() {
        console.debug('Using shape');
        console.dir(pVectors);
        
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            pVectors,
            gl.STATIC_DRAW
        );

        var vectorSize = 2;

        return {
            vectorSize: vectorSize,
            vectorType: gl.FLOAT,
            items: pVectors.length / vectorSize
        };
    }

    self.createDataBuffer = createDataBuffer;

    return self;

})();