#include <iostream>
#include <fstream>
#include <string>
#include <cmath>
#include <vector>
#include <sstream>
using namespace std;

/*class Order{
	public:
		double getOrderPrice() const;
		double getBuySell() const;
		Order();
		Order(string, double, int);
	private:
		string security;
		double price;
		int buySell;
};

Order::Order(){
	security = "ABCD";
	price = 100;
	buySell = 0;
}

Order::Order(string sec, double pr, int bs){
	security = sec;
	price = pr;
	buySell = bs;
}

class Market{
	public:
		int getBidQuote() const;	//returns bid quote of the market
		int getAskQuote() const;	//returns ask quote of the market
		void addOrder(const Order& order);	//adds an order to the book
		void removeBuyOrder();	//removes a buy order from the book
		void removeSellOrder();	//removes a sell order from the book
		double ComputePercentageChange(Market& market, int buyOrSell);
		Market();	//default constructor accepting no parameters
		Market(string securityName);	//constructor accepting parameter for security
	private:
		string security;	//what security the market corresponds to (B, F, I)
		double bidQuote;	//holds highest buy price in buy order book
		double askQuote;	//holds lowest sell price in sell order book
		vector<Order> buyOrders;	//represents the buy order book
		vector<Order> sellOrders;	//represents the sell order book
};

Market::Market(){
	security = "ABCD";
	bidQuote = 0, askQuote = 0;
}

Market::Market(string securityName){
	security = securityName;
	bidQuote = 0; askQuote = 0;
}

void addOrder(const Order& order){
	if(order.getBuySell() >= 1){
		buyOrders.push_back(order);
	}
	else{
		sellOrders.push_back(order);
	}
}

double Market::ComputePercentageChange(Market& market, int buyOrSell){
	if(buyOrSell){
		return (buyOrders.at(buyOrders.size() - 1) - buyOrders.at(0)) / 100;
	else
		return (sellOrders.at(sellOrders.size() - 1) = sellOrders.at(0)) / 100; 
	}
}
*/
int main(){
	cout << "HI" << endl;
	// order1("abc", 100, 1);
	//Order order2("abc", 105, 1);
	//Market market1("abc");
	//market1.addOrder(order1);
	//market1.addOrder(order2);
	//cout << ComputePercentageChange(market1, 1) << endl;
	return 0;
}