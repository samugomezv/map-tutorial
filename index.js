mapboxgl.accessToken = "pk.eyJ1Ijoic2FtdWdvbWV6diIsImEiOiJjbGw0N3VqbDYwMGl2M2ptbjB3a3djOTRiIn0.6Ctc1uc9EsgArIwolghArg";
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/samugomezv/cll5ky45700gy01qk0ad43mve", // style URL
    center: [33.4489, 70.6693], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
