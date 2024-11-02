// Maps

const newMaps = new Map()
newMaps.set(1, "INDIA")
newMaps.set(2, "USA")
newMaps.set(3, "CHINA")
newMaps.set(1, "INDIA")

// console.log(newMaps);

for (const [key] of newMaps) {
    console.log(key);
}

for (const [key, value] of newMaps) {
    console.log(key, ": -", value);
}
