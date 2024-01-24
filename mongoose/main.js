const createConnectionUrl = require("./db/connectionUrl");
const createDbConnection = require("./db/db");
const seedFunc = require("./seed");
const User = require("./schema/User");
const Post = require("./schema/Post");
const Product = require("./schema/Product");
const Comment = require("./schema/Comment");
const { faker, fi } = require("@faker-js/faker");
const Expense = require("./schema/Expense");

const main = async () => {
  const mongoUrl = createConnectionUrl();
  await createDbConnection(mongoUrl);

  // here writing the business logic
  // const data = generateData(10);
  // const postData = generatePostData(10);
  // const productData = generateProductData(10);

  // const user = new User(data[0]);

  // find the Product data
  const products = await Product.find({});
  // find the Post data
  const posts = await Post.find({});

  // products comments up to 5
  const productComments = products.map((product) => ({
    comment: faker.lorem.sentences(5),
    documentId: product._id,
    onModel: "Product",
  }));

  // posts comments up to 5
  const postComments = posts.map((post) => ({
    comment: faker.lorem.sentences(5),
    documentId: post._id,
    onModel: "Post",
  }));

  // await Comment.deleteMany({});

  // const Procomments = await Comment.insertMany(productComments);
  // const Poscomments = await Comment.insertMany(postComments);

  // console.log(Procomments);
  // console.log(Poscomments);

  const comments = await Comment.find({}).populate("documentId");

  // console.log(comments);
  // const posts = await Post.insertMany(postData);
  // const products = await Product.insertMany(productData);
  // const comment = new Comment(generateCommentData());

  // console.log(comment);

  // await comment.save();

  //   await user.save();
  //   const users = await user.getFullName();
  //   const users = await User.findByEmail("Dayna_Lowe47@hotmail.com");
  //   console.log(users);
  // await User.deleteMany({});

  // const users = generateData(200)
  //   .map((user) => new User(user))
  //   .map((user) => user.save());

  // await Promise.all(users);

  // const agg = [
  //   {
  //     $project: {
  //       _id: 0,
  //       month: {
  //         $month: "$past_date",
  //       },
  //       year: {
  //         $year: "$past_date",
  //       },
  //       email: 1,
  //       phone: 1,
  //       age: 1,
  //       amount: 1,
  //     },
  //   },
  //   {
  //     $group: {
  //       _id: {
  //         month: "$month",
  //         year: "$year",
  //       },
  //       totalAge: {
  //         $sum: "$age",
  //       },
  //       totalAmount: {
  //         $sum: "$amount",
  //       },
  //       amounts: {
  //         $push: "$amount",
  //       },
  //       count: {
  //         $sum: 1,
  //       },
  //       email: {
  //         $push: "$email",
  //       },
  //       phone: {
  //         $push: "$phone",
  //       },
  //     },
  //   },
  //   {
  //     $sort: {
  //       "_id.year": 1,
  //       "_id.month": 1,
  //     },
  //   },
  // ];

  const currentDate = new Date(); // Current date
  const fiscalYearsData = [];

  for (let i = 0; i < 10; i++) {
    const currentYear = currentDate.getFullYear() - i;
    const fiscalYearStart = new Date(currentYear, 7, 31); // July 31 of the current year
    const fiscalYearEnd = new Date(currentYear + 1, 6, 30); // June 30 of the next year

    fiscalYearsData.push({
      year: currentYear,
      start: fiscalYearStart,
      end: fiscalYearEnd,
    });
  }

  console.log(currentDate.getFullYear() - 5);
  console.log(new Date(currentDate.getFullYear() - 5, 7, 1));

  const generateFiscalRange = (numOfYear) => {
    const ranges = [];
    const currentDate = new Date();

    for (let i = 1; i <= numOfYear; i++) {
      const currentYear = currentDate.getFullYear() - i;
      const fiscalYearStart = new Date(currentYear, 6, 1); // July 31 of the current year
      const fiscalYearEnd = new Date(currentYear + 1, 5, 30); // June 30 of the next year

      ranges.push({
        fiscal_year:
          fiscalYearStart.getFullYear() + "-" + fiscalYearEnd.getFullYear(),
        start: fiscalYearStart,
        end: fiscalYearEnd,
      });
    }

    return ranges;
  };

  console.log(generateFiscalRange(10));
  const prevYear = new Date(currentDate.getFullYear() - 5, 6, 1);

  // format long date
  const date = new Date("2023-06-29T18:00:00.000Z");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  console.log(date.toLocaleDateString("en-US", options));

  const fiscalRange = generateFiscalRange(10);

  const aggregates = fiscalRange.map((range) => {
    const agg = [
      {
        $match: {
          date: {
            $gte: range.start,
            $lt: range.end,
          },
        },
      },
      {
        $group: {
          _id: null,
          fiscal_year: { $first: range.fiscal_year },
          totalExpenses: { $sum: "$amount" },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          totalExpenses: 1,
          count: 1,
          fiscal_year: 1,
        },
      },
    ];

    return Expense.aggregate(agg);
  });

  const results = await Promise.all(aggregates);

  // const results = await Expense.aggregate(agg);

  // const forMattedResults = results.map((result) => {
  //   console.log("Result ==> ", result[1]?._id?.year);
  //   return {
  //     year: result[0]?._id?.year + "-" + result[1]?._id?.year,
  //     totalExpenses: result[0]?.totalExpenses + (result[1]?.totalExpenses || 0),
  //   };
  // });

  console.log(results.map((result) => result[0]));
  // console.log("ForMattedResults ==> ", forMattedResults);

  const expenseData = seedFunc.generateExpenseData(50);
  // Expense.insertMany(expenseData).then((res) => console.log(res));

  // const result = await User.aggregate(agg);
};

main();
