/***********************************
 *
 * Implementing hash tables in Javascript:
 * Create a class for a Hash Table object
 * Create a constructor to create itself
 * Create a function to modify itself (i.e. setters and getters)
 *
 * *********************************/

class HashTable {
  // create functions

  constructor(size) {
    (this.size = size), (this.buckets = Array(this.size));

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  /* Note: hash function must return a numeric value 
      since its output should be a valid index in the hash table.
      It can also have its own requirements.*/

  hash(key) {
    let salt = 0;

    for (let i = 0; i < key.length; i++) {
      salt += key.toString().charCodeAt(i);
    }
    // console.log(key.toString().length % this.size);

    return salt % this.size;
  }

  // read functions

  get(key, value) {
    const hashedKeyIndex = this.hash(key);
    return this.buckets[hashedKeyIndex].get(hashedKeyIndex);
  }

  // update functions

  insert(key, value) {
    const hashedKeyIndex = this.hash(key);
    this.buckets[hashedKeyIndex].set([hashedKeyIndex, value]);
  }

  // delete functions

  remove(key) {}
}

// Create a hash table with 10 available buckets

const hashTable = new HashTable(10);

hashTable.insert("one", 1);
hashTable.insert("two", 2);
hashTable.insert(["three", 3]);
hashTable.insert(["four", 4]);
hashTable.insert("five", 5);
hashTable.insert("six", 6);
hashTable.insert("seven", 7);

console.log(hashTable);
