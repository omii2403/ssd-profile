function trackUserActivity() {

  // Log page view when page is loaded
  window.addEventListener('load', () => {
    const timestamp = new Date().toLocaleString();
    console.log(`Page Viewed at: ${timestamp}`);
  });

  // Capture all click events on the document
  document.addEventListener('click', (event) => {
    const target = event.target;
    const tag = target.tagName;
    const id = target.id ? `#${target.id}` : "";
    const classList = target.className ? `.${target.className}` : "";
    const timestamp = new Date().toLocaleString();

    console.log(`Click Event:
      Tag: ${tag}
      ID/Class: ${id}${classList}
      Time: ${timestamp}
    `);
  });
}

trackUserActivity();
