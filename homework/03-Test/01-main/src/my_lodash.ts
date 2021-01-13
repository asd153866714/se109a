function tail(list: any[]): any[] {
  let length = list.length;
  if (!length) return [];

  let index = 0;
  let result = new Array();

  while (index + 1 < length) {
    result[index] = list[index + 1];
    index++;
  }
  return result;
}

function reverse(list: any[]): any[] {
  let length = list.length;
  if (!length) return [];

  let result = new Array();

  for (let i = length - 1; i >= 0; i--) {
    result.push(list[i]);
  }
  return result;
}

function intersection(list1: any[], list2: any[]): any[] {
  let result = new Array();

  list1.forEach((i) => {
    list2.forEach((j) => {
      if (i === j) result.push(i);
    });
  });
  return result;
}

export { tail, reverse, intersection };
