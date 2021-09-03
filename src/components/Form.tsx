import React, { FormEvent } from 'react'

type Props = {
    onSubmit: (event: string) => void
}

export default function Form({ onSubmit }: Props) {
    const [value, setValue] = React.useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <>
                <input id={'todo-input'} 
                value={value}
                placeholder={'Add a todo'} 
                onChange={(event) => handleChange(event)} />

                <button type={'submit'}>Adicionar todo</button>
            </>
        </form>
    )
}