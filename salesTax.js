var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var result = {};

  for(var i = 0; i < salesData.length; i++){

    if((result[salesData[i].name])){

      for(var k = 0; k < salesData[i].sales.length; k++){
        result[salesData[i].name].totalSales +=  salesData[i].sales[k];
        result[salesData[i].name].totalTaxes += salesData[i].sales[k] * taxRates[salesData[i].province];
      }



    }
    else{
      result[salesData[i].name] = {
        totalSales: 0,
        totalTaxes: 0
      };

      for(var k = 0; k < salesData[i].sales.length; k++){
        result[salesData[i].name].totalSales +=  salesData[i].sales[k];
        result[salesData[i].name].totalTaxes += salesData[i].sales[k] * taxRates[salesData[i].province];
      }
    }
  }

  return result;
}

console.log(calculateSalesTax(companySalesData,salesTaxRates));






//var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/