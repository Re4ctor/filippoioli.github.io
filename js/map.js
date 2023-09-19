 const markersData = [
    ...abruzzo,
    ...basilicata,
    ...calabria,
    ...campania,
    ...emilia,
    ...friuli,
    ...lazio,
    ...liguria,
    ...lombardia,
    ...marche,
    ...molise,
    ...piemonte,
    ...puglia,
    ...sardegna,
    ...sicilia,
    ...toscana,
    ...trentino,
    ...umbria,
    ...veneto,
  ];

  const map = L.map("map").setView([43.8733715, 12.0135036], 5);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  const markers = L.markerClusterGroup();
  map.addLayer(markers);
  function filterMarkers() {
    const selectedValue = document.getElementById("filter-select").value;
    markers.clearLayers();
    markersData.forEach((markerInfo) => {
      if (
        selectedValue === "all" ||
        markerInfo.DATAZIONE.includes(selectedValue)
      ) {
        const marker = L.marker([
          markerInfo.COORDINATE.split(",")[0],
          markerInfo.COORDINATE.split(",")[1],
        ]);
        marker.type = markerInfo.DATAZIONE;
        //add popup
        marker.bindPopup(
          `<b>${markerInfo.DENOMINAZIONE}</b><br>${markerInfo.DATAZIONE}`
        );
        markers.addLayer(marker);
      }
    });
  }
  document
    .getElementById("filter-select")
    .addEventListener("change", filterMarkers);
  filterMarkers();