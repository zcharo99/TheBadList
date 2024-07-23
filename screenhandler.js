const levelSelector = document.getElementById('level-selector');
let levelSelectorEnabled = false;

if (window.screen.width < window.screen.height) {
    levelSelector.style.display = 'none';
    levelSelector.style.position = 'absolute';
    
    const levelSelectorButton = document.createElement('a');
    const levelSelectorButtonDiv = document.getElementById('level-selector-button');
    levelSelectorButton.style.backgroundColor = 'whitesmoke';
    levelSelectorButton.style.padding = '5px';
    levelSelectorButton.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
    const buttonIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    buttonIcon.setAttribute('width', '24');
    buttonIcon.setAttribute('height', '24');
    buttonIcon.setAttribute('viewBox', '0 0 24 24');
    buttonIcon.setAttribute('fill', 'none');
    buttonIcon.setAttribute('stroke', '#909090');
    buttonIcon.setAttribute('stroke-width', '3');
    buttonIcon.setAttribute('stroke-linecap', 'round');
    buttonIcon.setAttribute('stroke-linejoin', 'round');
    buttonIcon.classList.add('feather', 'feather-menu'); // add classes if needed
    
    // create the lines for the hamburger icon
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '3');  
    line1.setAttribute('y1', '12');
    line1.setAttribute('x2', '21');
    line1.setAttribute('y2', '12');
    
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '3');
    line2.setAttribute('y1', '6');
    line2.setAttribute('x2', '21');
    line2.setAttribute('y2', '6');
    
    const line3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line3.setAttribute('x1', '3');
    line3.setAttribute('y1', '18');
    line3.setAttribute('x2', '21');
    line3.setAttribute('y2', '18');
    
    // append lines to svg
    buttonIcon.appendChild(line1);
    buttonIcon.appendChild(line2);
    buttonIcon.appendChild(line3);

    levelSelectorButton.appendChild(buttonIcon);
    levelSelectorButton.style.zIndex = '9999';
    levelSelectorButton.style.position = 'absolute';
    levelSelectorButton.addEventListener('click', () => {
        levelSelectorEnabled = !levelSelectorEnabled;
        
        if (levelSelectorEnabled) {
            levelSelector.style.display = 'flex';
        } else {
            levelSelector.style.display = 'none'
        }
    });
    levelSelectorButtonDiv.appendChild(levelSelectorButton);
}
