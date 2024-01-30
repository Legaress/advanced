import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element
 */
export const promisesComponent = (element) => {

	console.log('promise');

	const renderHero = (hero) => {
		element.innerHTML = hero.name;
	}

	const renderError = (error) => {
		element.innerHTML = error;
	}

	const renderTwoHeroes = ([hero1,hero2]) => {
		element.innerHTML = `${hero1.name}<br>
							 ${hero2.name}`
	}

	const id1 = '5d86371f9f80b591f499df32';
	const id2 = '5d86371fd55e2e2a30fe1ccb2';
    
	//findHero(id1).then(renderHero).catch(renderError);

	Promise.all([
		findHero(id1),
		findHero(id2)
	])
	.then(renderTwoHeroes)
	.catch(renderError);
}

/**
 *
 * @param {String} id
 * @returns {Promise} 
 */
const findHero = (id) => {
	return new Promise((resolve, reject) => {
		const hero = heroes.find( hero => hero.id === id);

		if(hero){
			resolve(hero);
		}
		else{
			reject(`Hero with id ${id} was not found`);
		}
	});
}