import Swal, { type SweetAlertOptions } from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

/**
 * Attaches a SweetAlert2 trigger to an element and ensures proper event management.
 * - Removes the event listener after execution to prevent duplicate bindings.
 * - Re-attaches it when needed.
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
    title: "Coming Soon!",
    text: "Our mobile app is currently in development. Stay tuned!",
    icon: undefined,
    confirmButtonText: "OK",
    customClass: {
      popup: "coming-soon-alert",
    },
  };

  const clickHandler = () => {
    const finalOptions = Object.keys(options).length ? options : defaultOptions;

    Swal.fire({ ...finalOptions })
      .then(() => {
        Swal.close();
      })
      .finally(() => {
        element.removeEventListener("click", clickHandler);
        setTimeout(() => {
          element.addEventListener("click", clickHandler);
        }, 300);
      });
  };

  element.removeEventListener("click", clickHandler);
  element.addEventListener("click", clickHandler);
}
