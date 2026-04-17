window.function = function (p1) {
  // .value нужен, чтобы достать текст из объекта параметра
  const input = p1.value ?? ""; 
  return "Результат: " + input;
}
