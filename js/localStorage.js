const save = (key, value) => {
	try {
		const serializedState = JSON.stringify(value);
		localStorage.setItem(key, serializedState);
	}
	catch (error) {
		console.error(error.message)
	}
}
const load = key => {
	try {
		const serializedState = localStorage(key);
		return serializedState === null ? undefined : JSON.parese(serializedState);
	}
	catch (error) {
		console.error(error.message);
	}
}
const remove = key => {
	try {
		localStorage.removeItem(key)
	}
	catch (error) {
		console.error(error.message);
	};
}
export default save;