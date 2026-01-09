import { HashMap } from "./assets/hash-map.js";


const map = new HashMap();

map.set("key1", "value1");
map.set("asdf", "value2");
map.set("asdf", "value3");
map.set("key3", "value4");

console.log(map.get("key1"));