seedApp.service('algorithm', function() {

  // orders
  this.newOrder = function(sec, order, bs) {
    return {
      security: sec,
      orderPrice: order,
      buySell: bs
    }
  }

  // markets 
  this.newMarket = function(sec, bid, ask) {
    return {
      security : sec,
      //holds highest buy price in buy order book
      bidQuote : bid,
      //holds lowest sell price in sell order book
      askQuote : ask,
      //buy order book
      buyOrders : [],
      //sell order book
      sellOrders : []
    }
  }
  this.addOrder = function(market, order) {
    for(var i = 0; i < order.length; i++) {
      if(order[i].buySell >= 1)
        market.buyOrders.push(order[i])
      else
        market.sellOrders.push(order[i])
    }
    console.log(market)
    return market
  }
  // input: market obj, int
  this.computePercentageChange = function (market, buyOrSell) {
    console.log(market)
    if(buyOrSell >= 1) {
      console.log(market.buyOrders[0].orderPrice)
      return (market.buyOrders[market.buyOrders.length - 1].orderPrice - 
        market.buyOrders[0].orderPrice) / 100;
    } else {
      console.log('BAD')
      return (market.sellOrders[market.sellOrders.length - 1].orderPrice - market.sellOrders[0].orderPrice) / 100;
    }
  }
  // input: int 
  this.computeAveragePrice = function(market, buyOrSell) {
    var sum = 0
    if(buyOrSell >= 1) {
      for(var i = 0; i < market.buyOrders.length; i++) 
        sum += market.buyOrders[i].orderPrice
      console.log(sum)
      return sum / market.buyOrders.length
    } else {
      for(var j = 0; j < market.sellOrders.length; j++) 
        sum += market.sellOrders[i].orderPrice
      console.log(sum)
      return sum / market.sellOrders.length
    }
  }
  this.getBidQuote = function(market) {
    var max = 0.0
    for(var i = 0; i < market.buyOrders.length; i++)
      if(market.buyOrders[i].orderPrice > max)
        max = market.buyOrders[i].orderPrice
    return max
  }
  this.getAskQuote = function(market) {
    var min = 0.0
    for(var i = 0; i < market.sellOrders.length; i++)
      if(market.sellOrders[i].orderPrice < min)
        min = market.sellOrders[i].orderPrice
    return min
  }


  //investor
  this.newInvestor = function() {
    return {
      cashBalance: 0.0,
      orders: []
    }
  }
 
 })
