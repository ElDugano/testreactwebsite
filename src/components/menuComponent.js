import React, {Component} from 'react';
import Waiter from './waiterComponent';
import OrderStatus from './orderStatus';
import MenuItem from './menuItemComponent';
import ConstructBurger from './constructBurgerComponent';
import { MENU } from '../shared/menu';
import { CONDIMENTS } from '../shared/condiments';

const defaultToppingOption = "Regular"

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            waiterMessage: "Hello, what can I get for you today?",
            selectedFoodCategory: null,
            selectedFoodItem: null,
            currentOrder: {}
        };
      }

    selectCategory(foodCategory) {
        this.setState({selectedFoodCategory: foodCategory});
    }

    selectFood(foodItem) {
        this.setState({selectedFoodItem: foodItem});
    }

    //This would need to be more complicated to have proper logic.
    //This is going to be a function that is sent into construt componenets.
    //When the user hits submit, it will call this function, which will then
    //Update the current order, at that point the order will be locked in, good to go.
    //Ideally, this would be written so it can also include some type of update feature.
    //So, currentOrder would probably be an array or objects. The function would also accept
    //What index of the array it is updating. This way orders can be edited.
    //Alternatively, this could end up calling another component which lets you view your order
    //At a glance and confirm, kind of thing. Written so you can see all your toppings on one page.
    //That is probably the way to go.
    updateCurrentOrder(order) {
        let toppings = {};
        CONDIMENTS.forEach((item) => {
            if(item.alltheway === true) {
                toppings[item.name] = defaultToppingOption;
            }
            else
                toppings[item.name] = false;
        });
    //    this.setState(
    //        currentOrder.toppings = toppings
    //    ); 
    }

    orderMenu() {
        let orderMenu = {
            breadCrumb: null,
            title: null,
            menu: null
        }


        if(this.state.selectedFoodItem != null) {
            switch(this.state.selectedFoodCategory) {
                case "Burgers":
                case "Hot Dogs":
                case "Sandwiches":
                    orderMenu.breadCrumb = <span className="backBreadcrumb" onClick={() => this.selectFood(null)}>Back</span>;
                    orderMenu.Title = this.state.selectedFoodItem;
                    orderMenu.menu = <ConstructBurger />
                    break;
                case "Fries":
                case "Drinks":
                case "Shakes":
                default:
                    orderMenu.breadCrumb = <span className="backBreadcrumb" onClick={() => this.selectFood(null)}>Back</span>;
                    orderMenu.Title = this.state.selectedFoodItem;
                    orderMenu.menu = <div>coming soon</div>;
            }
        }
        else if (this.state.selectedFoodCategory) {
            orderMenu.breadCrumb = <span className="backBreadcrumb" onClick={() => this.selectCategory(null)}>Back</span>;
            orderMenu.Title = this.state.selectedFoodCategory;
            orderMenu.menu = <div className="row">
                {
                    MENU[this.state.selectedFoodCategory].map((item, key) => {
                        return <MenuItem key={key} title={item.name} subtitle={"$" + item.price} thirdtitle={item.calories + " cal"} image={item.image} onClick={() => this.selectFood(item.name)} />
                    })
                }
                </div>
        }
        else {
            orderMenu.breadCrumb = <span className="backBreadcrumb">&nbsp;</span>;
            orderMenu.Title = "What can we get for you?";
            orderMenu.menu = <div className="row">
                    <MenuItem title="Burgers" image="images/hamburgers.png" onClick={() => this.selectCategory("Burgers")} />
                    <MenuItem title="Hot Dogs" image="images/hotdogs.png" onClick={() => this.selectCategory("Hot Dogs")} />
                    <MenuItem title="Sandwiches" image="images/sandwiches.png" onClick={() => this.selectCategory("Sandwiches")} />
                    <MenuItem title="Fries" image="images/fries.png" onClick={() => this.selectCategory("Fries")} />
                    <MenuItem title="Drinks" image="images/drinks.png" onClick={() => this.selectCategory("Fries")} />
                    <MenuItem title="Shakes" image="images/shakes.png" />
                    {
                }
                </div>
        }
        
        return <>
            <div className="row">
                <div className="col-12">
                    {orderMenu.breadCrumb}
                    <h3>{orderMenu.Title}</h3>
                </div>
            </div>
            {orderMenu.menu}
        </>
    }

    render() {
        return <div className="container-lg container-fluid">
            <div className="row">
                <div className="col-12 col-lg-8 orderMenu order-lg-1 order-2">
                    {this.orderMenu()}
                </div>
                <div className="col-12 col-lg-4 order-lg-2 order-1">
                    <OrderStatus />
                </div>
            </div>
        </div>
    }
}

export default Menu;