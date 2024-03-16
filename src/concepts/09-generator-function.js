
/**
 * 
 * @param {HTMLDivElement} element
 */
export const generatorFunctionComponent = (element) => {

	const myGenerator = myGeneratorFunction();

	let stopCondition;
	do {

		const { value, done } = myGenerator.next();
		element.innerHTML += `${value} <br>`;
		stopCondition = done;

	} while (!stopCondition);

};

function* myGeneratorFunction() {

	yield 'Primer Elemento';
	yield 'Segundo Elemento';
	yield 'Tercero Elemento';
	yield 'Cuarto Elemento';
	yield 'Quinto Elemento';

	return 'Ultimo elemento';
}