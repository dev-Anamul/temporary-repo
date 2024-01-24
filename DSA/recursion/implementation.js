const func = (n) => {
  if (n === 0) return 0;
  func(n - 1);
  console.log(n);
};

func(5);
