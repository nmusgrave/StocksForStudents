#include <iostream>
#include <fstream>
#include <string>
#include <cmath>
#include <vector>
#include <sstream>
using namespace std;

class Order{
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
	price = 0;
	buySell = 0;
}

Order::Order(string sec, double pr, int bs){
	security = sec;
	price = pr;
	buySell = bs;
}

double Order::getOrderPrice() const{
	return price;
}

double Order::getBuySell() const{
	return buySell;
}

class Market{
	public:
		double getBidQuote() const;	//returns bid quote of the market
		double getAskQuote() const;	//returns ask quote of the market
		void addOrder(const Order& order);	//adds an order to the book
		void removeBuyOrder();	//removes a buy order from the book
		void removeSellOrder();	//removes a sell order from the book
		double ComputePercentageChange(Market& market, int buyOrSell);
		double ComputeAveragePrice(int buyOrSell);
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

void Market::addOrder(const Order& order){
	if(order.getBuySell() >= 1)
		buyOrders.push_back(order);
	else
		sellOrders.push_back(order);
}

double Market::ComputePercentageChange(Market& market, int buyOrSell){
	if(buyOrSell >= 1)
		return (buyOrders.at(buyOrders.size() - 1).getOrderPrice() - buyOrders.at(0).getOrderPrice()) / 100;
	else
		return (sellOrders.at(sellOrders.size() - 1).getOrderPrice() - sellOrders.at(0).getOrderPrice()) / 100; 
}

double Market::ComputeAveragePrice(int buyOrSell){
	double sum = 0;
	if(buyOrSell >= 1){
		for(int i = 0; i < buyOrders.size(); i++){
			sum += buyOrders.at(i).getOrderPrice();
		}
		return sum / buyOrders.size();
	}
	else{
		for(int i = 0; i < sellOrders.size(); i++){
			sum += sellOrders.at(i).getOrderPrice();
		}
		return sum / sellOrders.size();
	}
}

double Market::getBidQuote() const{
	double max = 0;
	for(int i = 0; i < buyOrders.size(); i++){
		if(buyOrders.at(i).getOrderPrice() > max)
			max = buyOrders.at(i).getOrderPrice();
	}
	return max;
}

double Market::getAskQuote() const{
	double min = sellOrders.at(0).getOrderPrice();
	for(int i = 0; i < sellOrders.size(); i++){
		if(sellOrders.at(i).getOrderPrice() < min)
			min = sellOrders.at(i).getOrderPrice();
	}
	return min;
}

class Investor{
	public:
		double getCashBalance() const;
		void setCashBalance(double balance);
		Investor(double bal);
	private:
		double cashBalance;
		vector<Order> orders;
};

Investor::Investor(double bal){
	cashBalance = bal;
}

double Investor::getCashBalance() const{
	return cashBalance;
}

void Investor::setCashBalance(double balance){
	cashBalance = balance;
}


int main(){
	Order order1("abc", 100, 1);
	Order order2("abc", 105, 1);
	Order order3("abc", 110, 1);
	Order order4("abc", 107, 1);
	Order order5("abc", 108, 1);
	Order order6("abc", 105, 1);
	Market market1("abc");
	market1.addOrder(order1);
	market1.addOrder(order2);
	market1.addOrder(order3);
	market1.addOrder(order4);
	market1.addOrder(order5);
	market1.addOrder(order6);
	double change = market1.ComputePercentageChange(market1, 1);
	cout << change << endl;
	cout << market1.getBidQuote() << endl;
	cout << market1.ComputeAveragePrice(1) << endl;
	cout << market1.ComputeAveragePrice(-1) << endl;
	return 0;
}