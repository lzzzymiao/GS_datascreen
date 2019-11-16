// 对象重新排序
export function sortObjASCII (obj) {
  let arr = Object.keys(obj).sort();
  if (arr.length === 0) {
    return {}
  }
  let sortObj = {};
  for (let ii in arr) {
    sortObj[arr[ii]] = obj[arr[ii]]
  }
  return sortObj
}
