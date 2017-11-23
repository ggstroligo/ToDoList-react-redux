import React from 'react'
import IconButton from '../template/iconButton.jsx'

export default props => {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{ todo.description }</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={ () => props.handleMarkAsDone(todo)} />
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={ () => props.handleMarkAsPending(todo)} />
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={res => props.sortByDescription()}>Descrição</th>
                    <th onClick={res => props.sortByAction()} className='table-actions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}