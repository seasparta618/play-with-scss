import './dna-supercoil-loader.scss';

const buildDNASupercoilLoader = (): HTMLElement => {
    const dnaSupercoilLoader = document.createElement('div');
    dnaSupercoilLoader.className = 'dnaSupercoilLoader';
    return dnaSupercoilLoader;
};

export default buildDNASupercoilLoader;
