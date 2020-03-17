import React, { Component  } from 'react';
import MenuItem from './menuItemComponent';
import { CONDIMENTS } from '../shared/condimentsOld';

const defaultToppingOption = "Regular"

class constructBurger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            burger: this.props.type,
            toppings: {}
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let toppings = {};
        CONDIMENTS.forEach((item) => {
            if(item.alltheway === true) {
                toppings[item.name] = defaultToppingOption;
            }
            else
                toppings[item.name] = false;
        });
        this.setState({
            toppings: toppings
        });   
    }
    
    

    selectTopping(update, setTopping) {
        if (setTopping === true) {
            setTopping = defaultToppingOption;
        }
        let newToppings = {...this.state.toppings, [update]: setTopping};
        this.setState({
            toppings: newToppings
        });
    }

    menuItem() {
        let condiments = CONDIMENTS.map((item, key) => {
            if (item.category === "condiment") {
                return <MenuItem
                        key={key+"condiment"}
                        title={item.name}
                        subtitle={item.calories + " cal"}
                        options={[
                            {value: "Light", onClick: () => this.selectTopping(item.name, "Light")},
                            {value: "Regular", onClick: () => this.selectTopping(item.name, "Regular")},
                            {value: "Extra", onClick: () => this.selectTopping(item.name, "Extra")}
                        ]}
                        image={item.image}
                        checkable={true}
                        checked={this.state.toppings[item.name]}
                        onClick={() => this.selectTopping(item.name, !this.state.toppings[item.name])}
                    />
            }
            return "";
        })

        var sauces = CONDIMENTS.map((item, key) => {
            if (item.category === "sauce") {
                return <MenuItem
                        key={key+"sauce"}
                        title={item.name}
                        subtitle={item.calories + " cal"}
                        options={[
                            {value: "Light", onClick: () => this.selectTopping(item.name, "Light")},
                            {value: "Regular", onClick: () => this.selectTopping(item.name, "Regular")},
                            {value: "Extra", onClick: () => this.selectTopping(item.name, "Extra")}
                        ]}
                        image={item.image}
                        checkable={true}
                        checked={this.state.toppings[item.name]}
                        onClick={() => this.selectTopping(item.name, !this.state.toppings[item.name])}
                    />
            }
            return "";
        })

        return (<>
                <div className="row">
                    <div className="col-12">
                        <h4>Condiments</h4>
                    </div>
                    {condiments}
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4>Sauces</h4>
                    </div>
                    {sauces}
                </div>
                </>
        );
    }

    render() {
        console.log(JSON.stringify(this.state));

        return (
            <>
                {this.menuItem()}
            </>
        );
    }
    
}

export default constructBurger;