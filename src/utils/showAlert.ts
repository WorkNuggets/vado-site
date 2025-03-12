import Swal, { type SweetAlertOptions } from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

/**
 * Attaches a SweetAlert2 trigger to an element and ensures proper event management.
 * - Safely removes any previous event listener before re-attaching a new one.
 *
 * @param {string} elementId - The ID of the element that will trigger the alert on click.
 * @param {SweetAlertOptions} options - Configuration options for the alert (title, text, icon, etc.).
 */
export function setupAlert(elementId: string, options: SweetAlertOptions = {}) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found.`);
    return;
  }

  const defaultOptions: SweetAlertOptions = {
    title: 'Coming Soon!',
    text: 'Our mobile app is currently in development. Stay tuned!',
    icon: undefined,
    confirmButtonText: 'OK',
    customClass: {
      popup: 'coming-soon-alert',
    },
  };

  const finalOptions = Object.keys(options).length ? options : defaultOptions;
  const clickHandler = () => {
    Swal.fire(finalOptions);
  };

  element.removeEventListener('click', clickHandler);
  element.addEventListener('click', clickHandler);
}
