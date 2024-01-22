import './index.scss';

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
    {
        const dnaSupercoilLoaderButton = document.createElement('button');
        dnaSupercoilLoaderButton.innerHTML = 'dna supercoil loader';
        const dnaSupercoilLoaderLi = document.createElement('li');
        dnaSupercoilLoaderLi.appendChild(dnaSupercoilLoaderButton);
        
        componentList.appendChild(dnaSupercoilLoaderLi);
    }

    componentListContainer.appendChild(componentList);
    app.append(componentListContainer);

    const showGround = document.createElement('div');
    showGround.className = 'showGround';
    showGround.id = 'showGround';
    app.appendChild(showGround);
}
);
