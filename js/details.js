//ay 7aga t5os el details
"use strict"
class Details{

async fetchDetails(gameId){
	 if(!gameId)
		{console.log("ID is NULL")
		return}
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '111c00658emsh321d0299b06b9d7p102ffbjsnc56516a41115',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};


try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    return result;
} catch (error) {
	console.error(error);
}
}
}

export default Details;