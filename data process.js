// 数组一些方法的实现

function Implement(arr) {
  this.arr = arr;
  this.forEach = function (callback) {
    for (var i = 0, len = this.arr.length; i < len; i++) {
      callback(this.arr[i], i, this.arr);
    }
  },
  this.sort = function (callback) {
    for (var i = 0, len = this.arr.length; i < len; i++) {
      var result = callback(arr[i], arr[i + 1]);
      if (result > 0) {
        //...排序
      } else if (result === 8) {
        //...排序
      }
    }
  },
  this.map = function (callback) {
    var nw = [];
    for (var i = 0; i < this.arr.length; i++) {
      nw[i] = callback(this.arr[i], i, this.arr);
    }
    return nw;
  },
  this.filter = function (callback) {
    var nw = [];
    for (var i = 0; i < this.arr.length; i++) {
      if (callback(this.arr[i], i, this.arr)) {
        nw.push(arr[i]);
      }
    }
    return nw;
  }
  this.reduce = function (callback, prev) {
    for (var i = 0, len = this.arr.length; i < len; i++) {
      prev = callback(prev, arr[i], i, arr);
    }
    return prev;
  }
}

// 让数组从小到大排序（升序）

var arr = [2, 4, 1, 5, 8];

arr.sort((a, b) => a - b); // 降序则 b - a

console.log(arr);

/* 整理不规范字符串 "张三|男|李四|女|王五|男|赵柳|男|田七|女"
   成[{…}, {…}, {…}, {…}, {…}]形式
*/

var rawStr = "张三|男|李四|女|王五|男|赵柳|男|田七|女";
var rawArr = rawStr.split("|");
// console.log(rawArr);
var nameArr = rawArr.filter((item, index, array) => index%2 === 0);
// console.log(nameArr);
var sexArr = rawArr.filter((item, index, array) => index%2 !== 0);
// console.log(sexArr);

function combine(nameArr, sexArr) {
  var len = rawArr.length / 2;
  var data = [];
  for(var i = 0; i < len; i++) {
    var dataObj = {};
    dataObj["name"] = nameArr[i];
    dataObj["sex"] = sexArr[i];
    data.push(dataObj);
  }
  return data;
}

var resultJson = combine(nameArr, sexArr);

console.log(resultJson);

/*
  "fjadskljgklasdfjhgkldafjhklajdsklgfjaklgjdf"
  统计每个字出现了多少次
  {f:5,j:8,a:3}
*/

var arr = "fjadskljgklasdfjhgkldafjhklajdsklgfjaklgjdf".split('');

console.log(arr);

var resultJson = arr.reduce(function (prev, cur, index) {
  if (prev[cur]) { // 第一次prev是{}，prev[cur]是undefined {f:1} {f:1,j:1}... {f:1,j:1,a:1} {f:1,j:2,a:1,....}
  prev[cur]++; // {f:1,j:2,a:1,....} {f:2,j:2,a:1,....}
  } else {
    prev[cur] = 1; // {f:1 } {f:1,j:1} {f:1,j:1,a:1}...
  }
  return prev;// {f:1} {f:1,j:1} {f:1,j:1,a:1}... {f:1,j:2,a:1,....} {f:2,j:2,a:1,....}
}, {});

console.log(resultJson);

/*
  移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
  [1,2,3,4,5,2,3,2,5,2] , 2=> [1, 3, 4, 5, 3, 5]
*/

  function removeWithoutCopy(arr, item) {
    for (var i = arr.length - 1; i > 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }

  console.log(removeWithoutCopy([1, 2, 3, 4, 5, 2, 3, 2, 5, 2], 2));

/*
  数组降维度展平
*/

var arr = [1, 2, 3, 4, [5, 6], [7, [8], 9], 10];
console.log(arr.flat(Infinity));

/*
  找出数组 arr 中重复出现过的元素 输出为新数组
  */
  var arr = [1, 2, 3, 4, 5, 6, 4, 5, 3, 2, 7];
  function findDup() {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (
        //当正向查询下标结果和反向查询下标结果不相等的时候 我们认为数组中最少存在2个这个元素
        arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) &&
        newArr.includes(arr[i]) === false
      ) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  console.log(findDup(arr));

  /*
  数组去重 (基础类型数组集合)
  [1,2,3,4,5,'haha',23,4,5,'haha',false,1]

*/

function unique(arr) {
  return arr.filter(function (item, index, arr) {
    return arr.indexOf(item, 0) === index;
  });
}


function unique(arr) {
  var newArr = [];
  arr.forEach(function (item, index) {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  });
  return newArr;
}

/*
  从某数据库接口得到如下值：
  {
    rows: [
      ["Lisa", 16, "Female", "2000-12-01"],
      ["Bob", 22, "Male", "1996-01-21"]
    ],
      metaData: [
        { name: "name", note: '' },
        { name: "age", note: '' },
        { name: "gender", note: '' },
        { name: "birthday", note: '' }
      ]
  }


  rows是数据，metaData是对数据的说明。现写一个函数parseData，将上面的对象转化为期望的数组：

    [
      { name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01" },
      { name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21" },
    ]
*/


var data = {
  rows: [
    ["Lisa", 16, "Female", "2000-12-01"],
    ["Bob", 22, "Male", "1996-01-21"]
  ],
  metaData: [
    { name: "name", note: '' },
    { name: "age", note: '' },
    { name: "gender", note: '' },
    { name: "birthday", note: '' }
  ]
}

function formatting(data) {
  var rows = data.rows;
  var metaData = data.metaData;
  if (!Array.isArray(rows) || !Array.isArray(metaData) || rows.length === 0 || metaData.length === 0) {
    return [];
  }
  return rows.map(function (item, index, arr) {
    return item.reduce(function (prev, cur, index) {
      // item里面的index数量和metaData一样
      // item里面的cur是"Lisa"...
      // 用[] = 给对象增加键值对
      prev[metaData[index]['name']] = cur; 
      return prev;
    }, {}); // 因为最后返回一个对象，所以先把prev设置成{}
  })
}

var resultData = formatting(data);
console.log(resultData);

/*
将下面这个对象转为数组 并实现 一个排序方法 一个筛选方法 
*/

/*
例子 :

formattingSort('height');   调用 formattingSort 传参 'height' 就以height属性值为排序属性 升序排序

[{
  name: 'Dan',
  age: 1,
  sex: 1,
  weight: '79kg',
  height: '110cm'
},
{
  name: 'meney',
  age: 4,
  sex: 1,
  weight: '69kg',
  height: '160cm'
},
{
  name: 'joker',
  age: 1,
  sex: 0,
  weight: '99kg',
  height: '190cm'
},
{
  name: 'jojo',
  age: 18,
  sex: 1,
  weight: '90kg',
  height: '195cm'
},
{
  name: 'stack',
  age: 99,
  sex: 1,
  weight: '199kg',
  height: '1190cm'
}]



  formattingFilter('age',function(item){
    return item > 10;
  });

  调用 formattingFilter 传参 'age' 和回调函数 
  以age属性为过滤条件 条件为 function回调函数的return公式

    
[{
  name: 'jojo',
  age: 18,
  sex: 1,
  weight: '90kg',
  height: '195cm'
},
{
  name: 'stack',
  age: 99,
  sex: 1,
  weight: '199kg',
  height: '1190cm'
}]

*/


var oData = {
  'joker': {
    age: 1,
    sex: 0,
    weight: '99kg',
    height: '190cm'
  },
  'meney': {
    age: 4,
    sex: 1,
    weight: '69kg',
    height: '160cm'
  },
  'Dan': {
    age: 1,
    sex: 1,
    weight: '79kg',
    height: '110cm'
  },
  'jojo': {
    age: 18,
    sex: 1,
    weight: '90kg',
    height: 'cm'
  },
  'stack': {
    age: 99,
    sex: 1,
    weight: '199kg',
    height: '1190cm'
  }
}

var oData1 = {
  'joker': {
    age: 1,
    sex: 0,
    weight: '99kg',
    height: '190cm'
  },
  'meney': {
    age: 4,
    sex: 1,
    weight: '69kg',
    height: '160cm'
  },
  'Dan': {
    age: 1,
    sex: 1,
    weight: '79kg',
    height: '110cm'
  },
  'jojo': {
    age: 18,
    sex: 1,
    weight: '90kg',
    height: '195cm'
  },
  'stack': {
    age: 99,
    sex: 1,
    weight: '199kg',
    height: '1190cm'
  }
}

// 转化

function formatting(rawData) {
  var names = Object.keys(rawData);
  return names.map(function (item) {
    return Object.assign({ name: item }, rawData[item]);
  });
}

var formattedData = formatting(oData);
console.log(formattedData);

// 排序

function dataSort(data, standard) {
  if (typeof data[0][standard] === "undefined") {
    // no such standard
    return data;
  }
  data.sort(function (a, b) {
    var aPrime = parseFloat(a[standard]) || 0,
      bPrime = parseFloat(b[standard]) || 0;
    return aPrime - bPrime;
  });
  return data;
}

console.log(dataSort(formattedData, "height"));
console.log(dataSort(formattedData, "weight"));

// 筛选

function dataFilter(data, key, condition) {
  // condition is a function
  return data.filter(function (item) {
    return condition(item[key]);
  });
}

console.log(
  dataFilter(formattedData, "age", function (value) {
    return value >= 18;
  })
);

console.log(
  dataFilter(formattedData, "sex", function (value) {
    return value == 1;
  })
);