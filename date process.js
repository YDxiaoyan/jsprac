var now = new Date();

// 格式化时间

function formatDate(d) {
  if (!(d instanceof Date)) {
    return;
  }
  var year = d.getFullYear(),
    month = d.getMonth() + 1,
    date = d.getDate(),
    day = ["日", "一", "二", "三", "四", "五", "六"][d.getDay()],
    hour = d.getHours(),
    minute = d.getMinutes(),
    second = d.getSeconds();
  return (
    year +
    "年" +
    padLeft(month) +
    "月" +
    padLeft(date) +
    "日 " +
    padLeft(hour) +
    ":" +
    padLeft(minute) +
    ":" +
    padLeft(second) +
    " 星期" +
    day
  );
}

function padLeft(num) {
  // 往左边补位
  // 如果num只有1位，String(num)[1]就是undefined，则"0" + num
  return (String(num)[1] && String(num)) || "0" + num;
}

// console.log(String(11)[1]); // 1
// console.log(String(11)[1] instanceof String); // false
// console.log(typeof String(11)[1]); // string

console.log(formatDate(now));

// 计算时间差  2019年12月11日 到 今天的时间差 毫秒数相减  1596464451415 - 1596464460115
//把毫秒差 换算成 日 小时 分钟 秒

function getInterval(start, end) {
  var day, hour, minute, second, interval;
  interval = (end - start) / 1000; // milliseconds => seconds
  day = ~~(interval / 60 / 60 / 24);
  hour = ~~((interval / 60 / 60) % 24);
  minute = ~~((interval / 60) % 60);
  second = ~~(interval % 60);
  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second,
  };
}

var start = new Date(Date.UTC(2021, 9, 15, 23, 25, 46));
var end = new Date(Date.UTC(2022, 10, 1, 12, 19, 10));

console.log(getInterval(start, end));