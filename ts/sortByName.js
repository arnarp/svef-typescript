function sortByName(a) {
  let result = a.slice(0);
  result.sort((x, y) => x.name.localCompare(y.name));
  return result;
}


sortByName(5);

