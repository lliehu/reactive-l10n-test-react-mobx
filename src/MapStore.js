import { observable, decorate } from 'mobx';

class MapStore {
  center = [61.45, 23.85]
  markerList = []
  markerComments = {}
  setCenter(latlng) {
    this.center = latlng;
  }
  addMarker(marker) {
    this.markerList.push(marker);
  }
  addCommentToMarker(marker, comment) {
    if (!this.markerComments[marker]) {
      this.markerComments[marker] = [];
    }
    this.markerComments[marker].push(comment);
  }
}
decorate(MapStore, {
  center: observable,
  markerList: observable,
  markerComments: observable
});
export default MapStore;
