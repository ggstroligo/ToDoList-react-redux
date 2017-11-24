const INITIAL_STATE = {
    description: '',
    orderBy: 'description',
    order: '-',
    list: []
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state,
                description: action.payload
            }
        case 'ORDER_BY_CHANGED':
            return { ...state,
                orderBy: action.payload
            }
        case 'ORDER_CHANGED':
            return { ...state,
                order: state.order == '-' ? '+' : '-',
            }
        case 'TODO_SEARCHED':
            return { ...state,
                list: action.payload
            }
        case 'TODO_CLEAR':
            return { ...state,
                description: ''
            }
        default:
            return state

    }
}