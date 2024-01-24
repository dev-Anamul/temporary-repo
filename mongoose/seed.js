const { faker } = require("@faker-js/faker");

exports.generateData = (n) => {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number("+8801#########"),
      // age: faker.number.int({ min: 18, max: 65 }),
      age: 30,
      past_date: faker.date.past(),
      future_date: faker.date.future(),
      gender: faker.person.sex(),
      eye_color: faker.color.human(),
      amount: +faker.finance.amount(),
      address:
        faker.location.streetAddress() +
        faker.location.city() +
        faker.location.country(),
      bio: faker.lorem.sentence(50),
      image: faker.image.avatar(),
    });
  }
  return data;
};

exports.generatePostData = (n) => {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      title: faker.lorem.sentence(5),
      description: faker.lorem.sentence(50),
      image: faker.image.url(),
      category: faker.lorem.word(),
    });
  }
  return data;
};

exports.generateProductData = (n) => {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentence(50),
      image: faker.image.url(),
      category: faker.lorem.word(),
    });
  }
  return data;
};

exports.generateCommentData = (n) => {
  const data = {
    comment: faker.lorem.sentences(5),
    documentId: "64f37cce5a37546d509c88cb",
    onModel: "Post",
  };

  return data;
};

exports.generateExpenseData = (n) => {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      date: faker.date.past({ years: 10 }),
      amount: +faker.finance.amount({ dec: 0 }),
    });
  }
  return data;
};
