const input_list = ["eat", "nat", "ate", "tan", "bat", "eye", "tab", "ant"];

let map = new Map();
input_list.forEach((element) => {
  //   console.log("\n element=", element);
  let temp_str = [...element].sort().join();
  //   console.log("\n temp_str=", temp_str);
  if (!map.has(temp_str)) {
    map.set(temp_str, []);
  }
  map.get(temp_str).push(element);
});
console.log("\n output array= ", map.values());
