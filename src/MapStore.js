import { observable, decorate } from 'mobx';

class MapStore {
  center = [61.45, 23.85]
  setCenter(latlng) {
    this.center = latlng;
  }
}
decorate(MapStore, {
  center: observable
});
export default MapStore;
