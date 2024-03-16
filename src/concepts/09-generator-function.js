
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

export const generatorFunction2Component = (element) => {

	const counter = myCounter();
	const counterButton = document.createElement('button');
	counterButton.innerText = 'Click me';
	element.append(counterButton);

	const renderButton = () => {
		counterButton.innerText = `Click ${counter.next().value}`;
	}

	counterButton.addEventListener('click', renderButton);

};

function* myGeneratorFunction() {

	yield 'Primer Elemento';
	yield 'Segundo Elemento';
	yield 'Tercero Elemento';
	yield 'Cuarto Elemento';
	yield 'Quinto Elemento';

	return 'Ultimo elemento';
}

function* myCounter() {
	let counter = 0;
	while (true) {
		yield ++counter;
	}
}