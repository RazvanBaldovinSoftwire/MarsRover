import picture_of_the_day from "../backend_calls";
import React, {useEffect, useState} from "react";

function BackgroundOfTheDay() {
	const [photoUrl, setPhotoUrl] = useState(null);
	const [date, setDate] = useState(null);
	const [author, setAuthor] = useState(null);
	const [info, setInfo] = useState(null);

	useEffect(  () => {
		picture_of_the_day().then(json => {
			setPhotoUrl(json.hdurl)
			setDate(json.date)
			setAuthor(json.copyright)
			setInfo(json.explanation)
		});
	}, []);

	return (
		<div>
			<img src={photoUrl} alt="background-image"
				 className="Background-image"/>
			<div className="Background-image-info">
				<text className="Background-image-author">{author} - </text>
				<text className="Background-image-date">{date}</text>
				<br/>
				{info}
			</div>
		</div>
	);
}

export default BackgroundOfTheDay;
