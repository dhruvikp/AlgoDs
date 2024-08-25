class SimpleHashMap {

    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i=0; i<key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this._hash(key);

        if(!this.map[index]) {
            this.map[index] = []
        }
        this.map[index].push([key,value]);
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.map[index];
        if(bucket) {
            for (let i = 0; i<bucket.length; i++) {
                if(bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }

    delete(key) {
        const index = this._hash(key);
        const bucket = this.map[index];

        if(bucket) {
            for (let i = 0; i<bucket.length; i++) {
                if(bucket[i][0]===key) {
                    bucket.splice(i,1);
                    return true;
                }
            }
        }
        return false;
    }

}

const myMap = new SimpleHashMap(10);
myMap.set("name","Alex");
myMap.set("age",25);

console.log(myMap.get("name"));
console.log(myMap.get("age"));

myMap.delete("name");
console.log(myMap.get("name"));
