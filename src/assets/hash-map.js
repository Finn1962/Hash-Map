export class HashMap {
    constructor() {
        this.map = Array(16).fill(null);
    }

    set(key, value) {
        const index = this.#hash(key);
        const bucket = this.map[index];
        const containsArray = Array.isArray(bucket)

        if (bucket === null) {
            this.map[index] = { key, value };
        } else if (containsArray) {
            const existingEntry = bucket.find((element) => element.key === key);
            if (existingEntry) existingEntry.value = value;
            else bucket.push({ key, value });
        } else {
            if (bucket.key === key) bucket.value = value;
            else this.map[index] = [bucket, { key, value }];
        }
    }

    get(key) {
        const index = this.#hash(key);
        const bucket = this.map[index];
        const containsArray = Array.isArray(bucket);

        if (bucket === null) return undefined;
        if (containsArray) {
            const entry = bucket.find((element) => element.key === key);
            return entry.value
        }
        return bucket.value;
    }

    #hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.map.length;
    } 
}