
const maskCPF = value => {
	return value
		.replace(/(\d{3})(\d)/, "$1.$2")
}

const maskPhone = value => {
	return value.replace(/\D/g, "")
		.replace(/(\d{2})(\d)/, "($1) $2")
		.replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
}

const isValidName = value => {
	return value.length > 1
}

const isValidCPF = value => {
	return value.length === 14
}

const isValidPhone = value => {
	return value.length === 15
}
const isValidEmail = value => {
	return value.includes("@") && value.includes(".")
}

const validator = {
	mask: {
		cpf: maskCPF,
		phone: maskPhone
	},
	isValid: {
		name: isValidName,
		cpf: isValidCPF,
		phone: isValidPhone,
		email: isValidEmail
	}
}

export default validator