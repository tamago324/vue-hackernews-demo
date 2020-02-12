
export let time = t => {
  const now = Date.now();
  const unixtime = new Date(t * 1000);
  // ミリ秒で取得できる
  const diff_milisec = now - unixtime.getTime();

  const min = diff_milisec / 1000 / 60;

  if (min < 60) {
    return Math.trunc(min) + " " + (min === 1 ? "min" : "mins");
  }

  const hour = Math.trunc(min / 60);

  if (hour < 24) {
    // 小数点以下を切り捨て
    return hour + " " + (hour === 1 ? "hour" : "hours");
  }

  const day = Math.trunc(hour / 24);
  return day + " " + (day === 1 ? "day" : "days");
}

export let property = (item, key) => {
  // null の可能性もある？ため、チェックする
  if (item === null || !(key in item)) {
    return "";
  }
  return item[key];
}

