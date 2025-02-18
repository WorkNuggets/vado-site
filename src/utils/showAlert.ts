import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

/**
 * Triggers a SweetAlert2 alert with a custom message and title.
 * Each time the alert is closed, it resets to ensure a fresh instance
 * for the next trigger.
 *
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
    icon: 'none',
    confirmButtonText: 'OK',
    customClass: 'coming-soon-alert',
  };

  element.addEventListener('click', () => {
    // Determine if we should use defaultOptions or the user-provided options
    const finalOptions = Object.keys(options).length === 0 ? defaultOptions : options;

    // Fire the alert. Once closed, everything resets for next time automatically.
    Swal.fire({ ...finalOptions, icon: 'none' }).then(() => {
      // After the alert closes, you can perform any additional cleanup here if needed.
      // But since SweetAlert2 is already stateless, this step is optional.
      Swal.close();  // Ensures it's fully closed before the next alert.
    });
  });
}
