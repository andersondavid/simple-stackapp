import React, { useState } from 'react'
import { fetchUpdate } from '../api/fetchCRUD'

export default function UpdateUser() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [age, setAge] = useState(0)
	const [id, setId] = useState(0)

	const userData = {
		name, email, age, id
	}

	const submitHandler = async (e) => {
		e.preventDefault()
		const res = await fetchUpdate(userData)
		console.log('Resposta para atualizar usuario', res);
	}

	return (
		<div>
			<h3>Editando/Atualizando um elemento da tabela</h3>
			<form>
			<label htmlFor='name'>Nome</label>
				<input type='text' name='name' id='name' value={name} onChange={e => setName(e.target.value)} />

				<label htmlFor='email'>Email</label>
				<input type='text' name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />

				<label htmlFor='age'>Idade</label>
				<input type='text' name='age' id='age' value={age} onChange={e => setAge(e.target.value)} />

				<label htmlFor='id'>Id</label>
				<input type='text' name='id' id='id' value={id} onChange={e => setId(e.target.value)} />

				<input type='submit' onClick={submitHandler} value='Adicionar' />
			</form>
		</div>
	)
}
