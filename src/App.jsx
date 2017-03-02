import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';
/*
const title = React.createElement('h1', null, 'React Todo');
const subtitle = React.createElement('p', { className: 'subtitle' }, 'This is my first app');
const container = React.createElement('div', null, title, subtitle);
*/

/*
function App() {
    return (
        <div>
            <h1>React Todo</h1>
            <p className="subtitle">This is my first app</p>
        </div>
    );
}
*/

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} />

                <section className="todo-list">
                    {this.state.todos.map(todo =>
                        <Todo key={todo.id} title={todo.title} completed={todo.completed}/>)
                    }

                </section>
            </main>
        );
    }

}


App.propTypes = {
    title: React.PropTypes.string,
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
  title: 'React Todo'
};

ReactDOM.render(<App initialData={todos} title={"React Todo"}/>, document.getElementById('root'));

