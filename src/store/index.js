import {createStore} from 'redux'

function Reducer(){

    return [
        {
            id: 1,
            name: 'Edson',
            marked: ''
        },
        {
            id: 1,
            name: 'Afonso',
            marked: 'marked'
        }
    ]

}

const store = createStore(Reducer)

export default store