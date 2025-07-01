function customRender(reactElement, container) {
  const domEl = document.createElement(reactElement.type);
  domEl.innerHTML = reactElement.children;
  domEl.setAttribute('href', reactElement.props.href);
  container.appendChild(domEl);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
  },
  children: 'Click me',
};

const mainContainer = document.getElementById('root');
customRender(reactElement, mainContainer);
