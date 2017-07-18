// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  //The average price is $23.63

  //Add all data.price, then divide by data.price.length, call variable avgPrice
  //'The average price is ' + avgPrice
  let dataSum = 0;
  let avgPrice = 0;
    for (var i = 0; i < data.length; i++) {
      dataSum += data[i].price ;
  }
    avgPrice = dataSum / data.length;
    console.log('The average price is $' + avgPrice.toFixed(2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  //1970s Coors Banquet Glass Beer Pitcher
  // 1970s Schlitz Malt Liquor Glass Beer Pitcher
  // The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
  // Hand Painted Colorful Feather Glass
  // Groomsman Gifts - Bottle Opener Credit Card Sized PERSONALIZED - FREE SHIPPING\

  // Iterate through data.price.length, push into new array midPrice
  //console.log or return midPrice array

  let midPrice = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      midPrice.push(data[i].title);
    }
  }
  console.log(midPrice);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  //1970s Schlitz Malt Liquor Glass Beer Pitcher costs 18 pounds.

  //iterate through data.currency_code === 'GBP'
  //return data.title

  let currencyCode = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === 'GBP') {
      console.log(data[i].title + ' costs ' + data[i].price + ' pounds.');
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  //SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
  // Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
  // Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
  // Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
  // Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

  //data.materials === "wood"
  //iterate through data.materials, display (console.log or return) if === "wood"

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === 'wood') {
        console.log(data[i].title + ' is made of wood.');
      }
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  //   Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
  // - wall mount bottle opener
  // - wedding
  // - man cave
  // - christmas gift
  // - guy gift
  // - fathers day
  // - home bar
  // - beer
  // - bar
  // The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug has 13 materials:
  // - glass
  // - sandblast cabinet
  // - vinyl
  // - beer glass
  // - pint glass
  // - etched pint glass
  // - etched glass
  // - etched beer glass
  // - 16 oz pint
  // - beer gift
  // - etched harry potter glass
  // - the three broomsticks glass
  // - personalized harry potter glass

  //
  //console.log name, number of items, the items it is made of
  //Iterate through data.materials array, display if <= 8

  for (var i = 0; i < data.length; i++) {
      if (data[i].materials.length > 8) {
        console.log(data[i].title + ' has ' + data[i].materials.length + ' materials: ');
        for (var j = 0; j < data[i].materials.length; j++) {
          console.log('-' + data[i].materials[j]);
      }
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  // 18 items were made by their sellers.

  //iterate through data.who_made
  //'data.who_made.length' + ' items were made by their sellers.'
  //who_made = i_did
  let seller = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === 'i_did') {
      seller ++;
    }
  }
  console.log(seller + ' items were made by their sellers.');
}
