import React, { useState } from 'react'
import { fetchPost } from '../api/fetchCRUD'

const addUser = async (userData) => {
	console.log(userData);
	return await fetchPost(userData)
}

export default function AddNewUser() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [age, setAge] = useState(0)

	const userData = {
		name, email, age
	}

	const submitHandler = async (e) => {
		e.preventDefault()
		const res = await addUser(userData)
		console.log('Resposta para adicionar usuario', res);
	}

	return (
		<div>
			<h3>Adicionando novos elementos da tabela</h3>
			<form>
				<label htmlFor='name'>Nome</label>
				<input type='text' name='name' id='name' value={name} onChange={e => setName(e.target.value)} />

				<label htmlFor='email'>Email</label>
				<input type='text' name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />

				<label htmlFor='age'>Idade</label>
				<input type='text' name='age' id='age' value={age} onChange={e => setAge(e.target.value)} />

				<input type='submit' onClick={submitHandler} value='Adicionar' />
			</form>
		</div>
	)
}
