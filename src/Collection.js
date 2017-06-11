import emptyCollection from './emptyCollection';
import filter from './filter';
import map from './map';

export default class Collection {
  constructor(iterable) {
    this.iterable = iterable || emptyCollection;
  }

  filter(filterFunc) {
    return new Collection(filter(this.iterable, filterFunc));
  }

  map(mapFunc) {
    return new Collection(map(this.iterable, mapFunc));
  }
}
