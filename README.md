#React-TODO

#Создание элемента:

React.createElement(/* тип */, /* свойства */, /* содержимое */);

React.createElement('h1', { className: 'title' }, 'React');
#Вывод элемента в DOM:

ReactDOM.render(/* React-элемент */, /* DOM-элемент */);

ReactDOM.render(container, document.getElementById('root'));