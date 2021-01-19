module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) {
    const newValue = item.enhancement + 1
    return { ...item, enhancement: newValue }
  } else
  return { ...item};
}

function fail(item) {
  if (item.enhancement < 15) {
    const newValue1 = item.durability - 5
    return { ...item, durability: newValue1 };
  }
  if (item.enhancement === 15) {
    const newValue2 = item.durability - 10
    return { ...item, durability: newValue2};
  }
  if (item.enhancement > 15) {
    const newValue3 = item.durability - 10
    const newValue4 = item.enhancement - 1
    return { ...item, durability: newValue3, enhancement: newValue4 };
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancement > 0) {
    return {...item, name: `[+${item.enhancement}] ${item.name}`}
  }
  return { ...item };
}
