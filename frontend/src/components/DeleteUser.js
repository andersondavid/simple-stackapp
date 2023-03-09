import React, { useState } from 'react'
import { fetchDelete } from '../api/fetchCRUD'

export default function DeleteUser() {
	const [id, setId] = useState(null)

	const submitHandler = async (e) => {
		e.preventDefault()
		const res = await fetchDelete(id)
		console.log('Resposta para adicionar usuario', res);
	}

	return (
		<div>
			<h3>Deletando um elemento da tabela</h3>
			<form>
				<label htmlFor='id'>ID</label>
				<input type='text' name='id' id='id' value={id} onChange={e => setId(e.target.value)} />

				<input type='submit' onClick={submitHandler} value='Deletar' />
			</form>
		</div>
	)
}
