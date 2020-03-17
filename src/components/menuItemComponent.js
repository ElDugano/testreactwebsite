import React, { Component  } from 'react';
import {Card, CardImg, CardTitle, CardSubtitle, CardText, CardImgOverlay,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }

    render() {
        let checkable = null;
        if (this.props.checkable) {
            if (this.props.checked) {
                checkable = <div className="card-checkbox"><span className="fa fa-check fa-lg text-dark float-right" /></div>
            }
            else {
                checkable = <div className="card-checkbox"></div>
            }
        }


        let optionsMenu = null;
        if (this.props.options != null && this.props.checked){
            let dropdownItems = this.props.options.map((option, key) => {
                return <DropdownItem key={key} onClick={() => option.onClick()}>
                    {option.value}
                </DropdownItem>
            })
            optionsMenu = (
                <Dropdown className="card-options" size="sm" isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
                    <DropdownToggle caret outline>
                        {this.props.checked}
                    </DropdownToggle>
                    <DropdownMenu>
                        {dropdownItems}
                    </DropdownMenu>
                </Dropdown>
            )
        }
        return (
            <div className="col-12 col-sm-6">
                <Card className="menuItem rounded-0">
                    <CardImg src={baseUrl + this.props.image} alt={this.props.title} />
                    <CardImgOverlay onClick={this.props.onClick}>
                        <CardTitle><h5>{this.props.title}</h5></CardTitle>
                        <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                        <CardText>{this.props.thirdtitle}</CardText>
                        {checkable}
                    </CardImgOverlay>
                    {optionsMenu}
                </Card>
            </div>
        );
    }
}

export default MenuItem;