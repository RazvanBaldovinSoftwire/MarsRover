import axios from 'axios';

export default async function Picture_of_the_day(date) {
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	let currentDate = `${year}-${month}-${day}`;

  	const url = new URL("/apod", "http://127.0.0.1:5000");
    url.search = new URLSearchParams({date: currentDate}).toString();

	return axios.get(url)
		.then(function (response) {
			// handle success
			console.log(response.data);
			return response.data;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
			return ""
		});
}
