function includeHTML(file, elementId) {
  fetch(file)
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Network response was not ok.');
    })
    .then(html => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = html;
      } else {
        throw new Error(`Element with ID '${elementId}' not found.`);
      }
    })
    .catch(error => {
      console.error('Error including HTML:', error);
    });
}
