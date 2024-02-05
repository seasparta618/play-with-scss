const buildCyberpunkButton = () => {
    const cyberpunkButton = document.createElement('button');
    cyberpunkButton.className = 'cyberpunkButton';
    cyberpunkButton.innerHTML = 'Now loading...'
    return cyberpunkButton;
}

export default buildCyberpunkButton;