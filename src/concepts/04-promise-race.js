
/**
 * 
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {

	element.innerText = 'Loading';

	const renderValue = (value) => {
		element.innerText = value;
	}
	Promise.race([
		slowPromise(),
		mediumPromise(),
		fastPromise(),
	])
	.then(renderValue);
}

const slowPromise = () => new Promise(resolve => {
	setTimeout(() => {
		resolve('Slow Promise');
	},2000);
});

const mediumPromise = () => new Promise(resolve => {
	setTimeout(() => {
		resolve('medium Promise');
	},1500);
});

const fastPromise = () => new Promise(resolve => {
	setTimeout(() => {
		resolve('Fast Promise');
	},1000);
});
