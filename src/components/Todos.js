import React, { Fragment, useState } from 'react'

const Todos = () => {
    const [todosState, setTodosState] = useState(['Việc 1', 'Việc 2', 'Việc 3'])
    
    return (
        <Fragment>
            {todosState.map(todo => {
                return <p>{todo}</p>
            })}
        </Fragment>
        
    )
}

export default Todos