var lab = lab || {};

lab.glProgram = (function() {
    
    var self = {};

    var program = null;

    /**
     * Compiles a shader application from script element
     * @param {WebGl} gl WebGL Context
     * @param {string} id script id
     * @returns object WebGL Shader
     */
    function getShader(gl, id) {
        var shaderScript = document.getElementById(id);
        if (!shaderScript) {
            console.error('Did not find shader with id ' + id);
            return null;
        }
        console.debug('Found shader with id ' + id);
  
        var str = "";
        var k = shaderScript.firstChild;
        while (k) {
            if (k.nodeType == 3)
                str += k.textContent;
            k = k.nextSibling;
        }
  
        var shader;
        if (shaderScript.type == "x-shader/x-fragment") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else if (shaderScript.type == "x-shader/x-vertex") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else {
            return null;
        }
  
        gl.shaderSource(shader, str);
        gl.compileShader(shader);
  
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            return null;
        }
  
        return shader;
    }

    self.program = program;

    /**
     * Setups the shading languages and compiles them into a program
     * @returns undefined
     */
    self.init = function(vertexShader, fragmentShader) {
        console.debug('glProgram initialised');
        var vShader = getShader(gl, 'vertexShader'),
            fShader = getShader(gl, 'fragShader');

        program = gl.createProgram();
        console.debug('Created WebGL Program');

        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Could not initialise shaders');
        }

        gl.useProgram(program);
        console.debug('Using program');
        self.program = program;
    }

    return self;

})();