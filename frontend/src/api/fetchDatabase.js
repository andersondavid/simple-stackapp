async function fetchDatabase() {
	const fetchResults = await fetch("http://localhost:3000/users")
	const dataResults = await fetchResults.json()
	return dataResults
}

export default fetchDatabase