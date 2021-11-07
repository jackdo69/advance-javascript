function* query(n: number) {
  while (n <= 10) {
    yield n;
    n++;
  }
}

function printTo10(num: number) {
  const result = query(num);
  let finish = false;
  while (!finish) {
    const { value, done } = result.next();
    value && console.log(value);
    finish = done;
  }
}

printTo10(5);
