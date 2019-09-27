export const required = value => {
	if(value) return undefined;
	return "  Необходимо заполнить";
}

export const maxLengthValidator = (maxLength) => (value) => {
	if(value.length > maxLength) return "  Максимально допустимое количество символов - " + maxLength;
	return undefined;
}