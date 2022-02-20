import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Hello world!!!!");
    this.element.textContent = "Hello World!"
  }

  search(event) {
    const query = this.queryTarget.value;
    const baseUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=`;
    const apiKey = "pk.eyJ1IjoiYWd1YWxkZSIsImEiOiJja3o4Z2FtMzkwdDZvMndxbXR5MHh3aXJvIn0.Imzgdq_96I3jJ00Nf0PjXA";
    event.preventDefault();
    this.coordinatesTarget.innerHTML = "";
    this.mappyTarget.innertHTML = "";
    fetch(`${baseUrl}${apiKey}`)
      .then(response => response.json())
      .then((data) => {
        const point = data.features[0].geometry.coordinates;
        this.coordinatesTarget.insertAdjacentHTML("beforeend", point.toString());

        });
      };
  }
