// hashing functiog
const hash = (key, size) => {
    let hashedKey = 0;

    // populates hashedKey with integer
    // based on the key's string characters
    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i);
    }

    // modulo hashedKey by size 
    return hashedKey % size;
}

class HashTable {
    constructor() {
        this.size = 20;
        this.buckets = Array(this.size);

        for (let i = 0; i < this.buckets.length; i++) {
            // this is an ES6 Map() object
            // it holds key-value pairs
            // and remembers original insertion order
            // very helpful!
            this.buckets[i] = new Map();
        }
    }

    insert(key, value) {
        let index = hash(key, this.size);
        // .set is a built in method on the Map() data structure
        // this inserts the key value pair
        // into the hash table
        this.buckets[index].set(key, value);
    }

    remove(key) {
        let index = hash(key, this.size);
        // .get is also a built in Map() method
        // we get the key from the table and store it in 'deleted'
        let deleted = this.buckets[index].get(key);
        // .delete is also a built in Map() method
        this.buckets[index].delete(key);
        return deleted + ' has been deleted';
    }

    search(key) {
        let index = hash(key, this.size);
        return this.buckets[index].get(key);
    }
};

let hashTable = new HashTable();

hashTable.insert('geralt', 'witcher');
hashTable.insert('yennifer', 'witch');
hashTable.insert('eredin', 'wild hunt');
hashTable.insert('bruxa', 'monster');

console.log(hashTable.search('geralt'));