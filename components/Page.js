const Container = ({ classes, children }) => {
	const containerClass = `${classes} min-h-screen w-11/12 md:w-8/12 mx-auto pb-2`
	return (
		<main className="w-screen min-h-screen bg-gray-100">
			<div className={containerClass}>{children}</div>
		</main>
	)
}

const Title = ({ classes, children }) => {
	const titleClass = `${classes} font-bold text-2xl my-4 text-center`
	return (
		<h1 className={titleClass}>
			{children}
		</h1>
	)
}

export { Container, Title }