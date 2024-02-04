import './index.scss';
import buildDNASupercoilLoader from './components/dna-supercoil-loader/dnaSupercoilLoader';
import buildCyberPunkButton from './components/buttons/moving-border-button/MovingBorderButton';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (!app) return null;
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to my playground with scss';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a pretty simple typescript website with some interesting scss & ts build components';

    app.appendChild(heading);
    app.appendChild(paragraph);

    const componentListContainer = document.createElement('div');
    const componentList = document.createElement('ul');
    componentList.id = 'componentList';

    componentListContainer.appendChild(componentList);
    app.append(componentListContainer);

    const showGround = document.createElement('div');
    showGround.className = 'showGround';
    showGround.id = 'showGround';
    app.appendChild(showGround);
    const dnaSupercoilLoader = buildDNASupercoilLoader();
    if (dnaSupercoilLoader){
        const dnaSupercoilLoaderButton = document.createElement('button');
        const onButtonClick = ():void => {
            showGround.replaceChildren();
            showGround.appendChild(dnaSupercoilLoader);
        }
        dnaSupercoilLoaderButton.onclick = onButtonClick;
        dnaSupercoilLoaderButton.innerHTML = 'dna supercoil loader';
        const dnaSupercoilLoaderLi = document.createElement('li');
        dnaSupercoilLoaderLi.appendChild(dnaSupercoilLoaderButton);
        componentList.appendChild(dnaSupercoilLoaderLi);
    }
    const progressiveButton = buildCyberPunkButton();
    if (progressiveButton){
        const progressiveButtonToggle = document.createElement('button');
        const onButtonClick = ():void => {
            showGround.replaceChildren();
            showGround.appendChild(progressiveButton);
        }
        progressiveButtonToggle.onclick = onButtonClick;
        progressiveButtonToggle.innerHTML = 'progressive button';
        const progressiveButtonLi = document.createElement('li');
        progressiveButtonLi.appendChild(progressiveButtonToggle);
        componentList.appendChild(progressiveButtonLi);
    }

}
);
