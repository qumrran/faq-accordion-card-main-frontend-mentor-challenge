const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const content = button.nextElementSibling;
		content.classList.toggle('active');

		const arrow = button.querySelector('.arrow');
		arrow.classList.toggle('down');

		button.classList.toggle('bold');

		if (content.classList.contains('active')) {
			content.classList.remove('inactive');
		} else {
			content.classList.add('inactive');
		}
	});
});
