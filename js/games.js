//ay 7aga t5os el home page
"use strict"
class Home{
   async fetchCards(category){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '111c00658emsh321d0299b06b9d7p102ffbjsnc56516a41115',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
    return data;
} catch (error) {
	console.error(error);
}
    }
}

export default Home;