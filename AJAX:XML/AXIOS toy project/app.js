const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
	e.preventDefault();
	const searchTerm = form.elements.query.value;
	const config = { params: { q: searchTerm } }
	const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config)
	makeImages(res.data)
	form.elements.query.value = '';
})

const makeImages = (results) => {
	for (let result of results) {
		if (result.show.image) {
			const img = document.createElement('img');
			img.src = result.show.image.medium;
			document.body.append(img)
		}
	}
}