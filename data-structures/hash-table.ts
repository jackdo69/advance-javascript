/**
 * Hash function is irreversable,
 * From the out put we can't determine the input
 * There are some characteristics of a
 * good hash function
 * 1. Fast (linear time)
 * 2. Giving output with same length
 * 3. Same input always give the same output
 */

/**
 * For the sake of simplicity, we will hash
 * a string in this function
 */

/**
 * Another note, when talking about table size
 * using a prime number is proven to be better at
 * reducing collision
 */

/**
 * Handling collisions:
 * 1. Seperate chaining: Storing key with same hash to the same spot
 * 2. Linear probing: Storing key with the same hash to the next
 * available spot (with this approach, table size 10 will have
 * capacity of 10)
 */

/**
 * Time complexity:
 * Insert: O(1)
 * Delete: O(1)
 * Access: O(1)
 */

class HashTable {
  private PRIME = 31;
  keyMap: Array<Array<[key: string, value: string]>>;
  constructor(size = 257) {
    this.keyMap = new Array(size);
  }

  hash(key: string): number {
    let total = 0;
    //In order to make sure the hash will run with constant
    //time, we will limit the number of string of key
    //it will hash, here is length of 100
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      //charCodeAt will return the Unicode value of a
      //character at given position of a string
      const val = key.charCodeAt(i);
      total = total * this.PRIME + val;
    }
    //the module part is to make sure the return
    return total % this.keyMap.length;
  }

  static removeDuplicate(arr) {
    return arr.filter(
      (item: string, index: number) => arr.indexOf(item) === index
    );
  }

  set(key: string, value: string) {
    const hashedKey = this.hash(key);
    if (this.keyMap[hashedKey]) {
      this.keyMap[hashedKey].push([key, value]);
    } else {
      this.keyMap[hashedKey] = [[key, value]];
    }
  }

  get(key) {
    const hashedKey = this.hash(key);
    if (!this.keyMap[hashedKey]) return null;
    if (this.keyMap[hashedKey].length === 1) return this.keyMap[hashedKey][0];
    return this.keyMap[hashedKey].find((item) => item[0] === key);
  }

  keys() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        const list = this.keyMap[i].map((item) => item[0]);
        results = results.concat(list);
      }
    }
    return HashTable.removeDuplicate(results);
  }

  values() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        const list = this.keyMap[i].map((item) => item[1]);
        results = results.concat(list);
      }
    }
    return HashTable.removeDuplicate(results);
  }
}
let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('purple', '#DDA0DD');
ht.set('violet', '#DDA0DD');

console.log(ht.values());
