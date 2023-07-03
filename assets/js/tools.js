function includeHTML(filesAndIds) {
  const promises = filesAndIds.map(({ file, elementId }) =>
    fetch(file)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error(`Network response was not ok for file: ${file}`);
      })
      .then(html => {
        const element = document.getElementById(elementId);
        if (element) {
          const div = document.createElement('div');
          div.innerHTML = html;
          element.appendChild(div);
        } else {
          throw new Error(`Element with ID '${elementId}' not found.`);
        }
      })
      .catch(error => {
        console.error('Error including HTML:', error);
      })
  );

  return Promise.all(promises);
}
