import { observable, decorate } from 'mobx';

export const PRONOUN_MALE = 'male';
export const PRONOUN_FEMALE = 'female';
export const PRONOUN_NEUTRAL = 'other';

class CatCountStore {
  count = 1;
  pronoun = 'noneyet';
  setCount(newCount) {
    this.count = newCount;
  }
  setPronoun(newPronoun) {
    this.pronoun = newPronoun;
  }
}

decorate(CatCountStore, {
  count: observable,
  pronoun: observable
});


export default CatCountStore;
