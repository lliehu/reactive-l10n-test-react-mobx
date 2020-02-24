import { observable, decorate } from 'mobx';

class MapStore {
  center = [61.45, 23.85]
  markerList = []
  setCenter(latlng) {
    this.center = latlng;
  }
  addMarker(marker) {
    this.markerList.push(marker);
  }
}
decorate(MapStore, {
  center: observable,
  markerList: observable
});
export default MapStore;
