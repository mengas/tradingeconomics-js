// require("dotenv").config();

const te = require("tradingeconomics");

// require("dotenv").config({ path: "./.env" });
// te.login(process.env.API_KEY);
te.login("d62824132ead404:znfpte4620s4zhc");

/*

te.getEurostatHistorical((id = "74141"))
  .then((data) => {
    console.log(data);
    console.log(data.length);
  })
  .catch((err) => {
    console.error(err);
  });

te.getEurostatData((lists = "countries"))
  .then((result) => {
    console.log(result);
    console.log(result.length);
  })
  .catch((err) => {});

te.getEurostatHistorical(
  (id = "24804"),
  (start_date = "2010-01-01"),
  (end_date = "2025-12-31")
).then((result) => {
  console.log(result);
  console.log(result.length);
});

te.getEurostatData(
  // (country = ["Portugal", "Spain"])
  (country = "Portugal")
  // (category = "People at risk of income poverty after social transfers"))
)
  .then((result) => {
    result.forEach((el) => {
      console.log(el.Category);
    });
    console.log(result.length);
  })
  .catch((err) => {
    console.error("Error fetching Eurostat data:", err);
  });


// function created by mengas, 09-jul-2025
const countryImports = async (countryName) => {
  await te
    .getComtradeTotalByType((country = countryName), (type = "import"))
    .then((result) => {
      console.log(
        countryName +
          ` imported ` +
          result[0].value / 1000000 +
          ` million USD in ` +
          result[0].date
      );
      console.log(
        countryName + ` has ` + result.length + ` import references.`
      );
    });
};
countryImports("Portugal");

te.getComtrade((category = "categories"))
  .then((result) => {
    console.log(result);
    console.log(result.length);
  })
  .catch((err) => {});

te.getFinancialsHistorical((symbol = ["aapl:us"]), (category = "assets")).then(
  function (data) {
    console.log(data);
    console.log(data.length);
  }
);

te.getComtrade((country = "sweden"), (country1 = "new zealand")).then((data) =>
  console.log(data[23])
);

te.getWorldBank((country = "sweden")).then((data) => console.log(data[0]));

te.getFinancialsDataByCategory((category = "debt")).then(function (data) {
  console.log(data.length);
  // console.log(data);
});

te.getHistoricalData((country = "mexico"), (indicator = "gdp")).then(function (
  data
) {
  console.log(data);
  console.log(data.length);
  data.forEach((item) => {
    console.log(item.DateTime);
  });
});

data = te.getIndicatorData((indicator = "gdp")).then(function (data) {
  console.log(data.length);
  console.log(data);
});
*/
