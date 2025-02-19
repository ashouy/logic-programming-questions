export const rotate = (list: number[], rotations: number): number[] => {
  let index;
  let listLength = list.length;
  if (rotations == 0 || rotations % listLength == 0) {
    return list;
  }
  if (rotations > listLength) {
    index = rotations % listLength;
  } else {
    index = rotations;
  }
  let result: number[] = [];
  for (let i = 0; i < listLength; i++) {
    result[index] = list[i];
    index++;
    if (index >= listLength) {
      index = 0;
    }
  }
  return result;
};
