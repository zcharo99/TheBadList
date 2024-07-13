let typedKeys = ''; // to store the sequence of typed keys
const targetWord = 'debug'; // the specific word to match
let debugscreentoggle = false;

// Creating debug elements
const debugdiv = document.getElementById('debugdiv');
const res = document.createElement('p');
res.textContent = `Window Resolution: ${window.screen.width}x${window.screen.height}`;
debugdiv.appendChild(res);

document.addEventListener('keydown', function(event) {
    // ignore keys like Shift, Ctrl, etc.
    if (event.key.length === 1) {
        // add the pressed key to the typedKeys string
        typedKeys += event.key.toLowerCase();

        // check if the typedKeys string ends with the targetWord
        if (typedKeys.endsWith(targetWord)) {
            debugscreentoggle = !debugscreentoggle
            if (debugscreentoggle) {
                debugdiv.style.display = 'block';
            } else {
                debugdiv.style.display = 'none';
            }

            // clear the typedKeys string after a match
            typedKeys = '';
        }

        // limit the length of typedKeys to avoid memory issues
        if (typedKeys.length > targetWord.length) {
            typedKeys = typedKeys.slice(-targetWord.length);
        }
    }
});
