import React from 'react';
import {Card, CardImg} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function Waiter(props) {
    return (
        <>
        <div className="waiter">
            <div>{props.message}</div>
            <Card>
                <CardImg src={baseUrl + 'images/waiter.png'} height='100%' width='100%' alt="Hello" />
            </Card>
        </div>
        </>
    );
}

export default Waiter;