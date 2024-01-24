const generateData = () => {
  // {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  const data = [];
  for (let i = 1; i <= 60; i++) {
    data.push({
      uv: i,
      pv: i,
      x: Math.floor(0.9 * i),
      y: Math.floor(0.7 * i),
    });
  }

  return data;
};

export default generateData;
