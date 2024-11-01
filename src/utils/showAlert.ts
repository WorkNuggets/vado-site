import Swal from 'sweetalert2';

/**
 * Triggers a SweetAlert2 alert with a custom message and title.
 * @param {string} elementId - The ID of the element that will trigger the alert on click.
 * @param {object} options - Configuration options for the alert (title, text, icon, etc.).
 */
export function setupAlert(elementId, options = {}) {
	const element = document.getElementById(elementId);
	if (!element) {
		console.warn(`Element with ID "${elementId}" not found.`);
		return;
	}

	// Default options with a "Coming Soon" alert message
	const defaultOptions = {
		title: 'Coming Soon!',
		text: 'Our mobile app is currently in development. Stay tuned!',
		icon: 'info',
		confirmButtonText: 'OK',
		customClass: 'coming-soon-alert',
	};

	const alertOptions = { ...defaultOptions, ...options };

	element.addEventListener('click', () => {
		Swal.fire(alertOptions);
	});
}
