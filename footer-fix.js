// Re-layout slides after content (like plotly) is rendered
Reveal.on('slidechanged', () => {
  Reveal.layout();
});

window.addEventListener('load', () => {
  Reveal.layout();
});