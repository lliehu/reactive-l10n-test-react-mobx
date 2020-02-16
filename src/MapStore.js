import { observable, decorate } from 'mobx';

class MapStore {
  center = [61.45, 23.85]
  centerTimestamp = new Date()
  setCenter(latlng) {
    this.center = latlng;
    this.centerTimestamp = new Date();
  }
}
decorate(MapStore, {
  center: observable
});
export default MapStore;
