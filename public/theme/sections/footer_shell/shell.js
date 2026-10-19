function populateDynamicTexts(data) {
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element && value != null) element.textContent = value;
  };

  if (data.site?.title) document.title = data.site.title;
  setText("wtTitle", data.welcomeToast?.title);
  setText("wtSubtitle", data.welcomeToast?.subtitle);
  setText("roseText", data.roseText);
}

document.addEventListener("ssMainDataLoaded", ({ detail }) =>
  populateDynamicTexts(detail),
);
