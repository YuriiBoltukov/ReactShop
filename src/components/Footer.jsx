function Footer() {
	const date = new Date().getFullYear();

	return (
		<footer className='page-footer deep-purple darken-2'>
			<div className='footer-copyright'>
				<div className='container'>
					© {date} Copyright Text
					<a
						className='grey-text text-lighten-4 right'
						href='https://github.com/YuriiBoltukov'>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
