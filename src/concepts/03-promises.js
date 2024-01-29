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

	const id1 = "5d86371f9f80b591f499df32";
	findHero(id1).then(renderHero).catch(renderError);
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