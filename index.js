const confirmEnd = (str, target) => {
  console.log(str.substr(-target.length) === target ? true : false);
  return str.substr(-target.length) === target ? true : false;
}

confirmEnd('same', 'same')
confirmEnd('same', 'notsame')
confirmEnd('true', 'true')
confirmEnd('same', 'false')
confirmEnd('win', 'win')
