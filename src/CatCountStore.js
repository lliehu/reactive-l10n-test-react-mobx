import { observable, decorate } from 'mobx';

class CatCountStore {
  count = 1;
  pronoun = null;
  setCount(newCount) {
    this.count = newCount;
  }
  setPronoun(newPronoun) {
    this.pronoun = newPronoun;
  }
}

decorate(CatCountStore, {
  count: observable,
});


export default CatCountStore;
