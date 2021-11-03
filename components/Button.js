export default function Button({ classes, children }) {
	const buttonClass = `${classes} py-2 w-full bg-blue-500 rounded-md text-white text-lg`
	return (
		<button className={buttonClass}>
			{children}
		</button>
	)
}