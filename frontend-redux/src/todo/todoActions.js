import axios from 'axios'

const URL = `http://localhost:3003/api/todos`

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})


// Métodos de pesquisa
export const search = () => {
    return (dispatch, getState) => {
        const {
            description,
            order,
            orderBy
        } = getState().todo
        const search = description ? `&description__regex=/${description}/i` : ''
        const request = axios.get(`${URL}?sort=${order}${orderBy}${search}`)
            .then(resp => dispatch({
                type: 'TODO_SEARCHED',
                payload: resp.data
            }))
    }
}

export const filterColumn = (field) => (
    [
        {
            type: 'ORDER_BY_CHANGED',
            payload: field
        },
        {
            type: 'ORDER_CHANGED',
        },
        search()
    ]
)

// Métodos CRUD
export const add = description => {
    return dispatch => {
        axios.post(URL, {
                description
            })
            .then(resp => dispatch(clearForm()))
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo,
                done: true
            })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo,
                done: false
            })
            .then(resp => dispatch(search()))
    }
}

// Métodos auxiliares
export const clearForm = () => {
    return [{
        type: 'TODO_CLEAR'
    }, search()]
}