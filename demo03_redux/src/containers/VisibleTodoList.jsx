import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions/index';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}
// 给TodoList传入State
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
// 给TodoList传入dispatch
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
// 绑定
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)