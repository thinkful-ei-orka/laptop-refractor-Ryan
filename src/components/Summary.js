import React from 'react';
import SummaryList from './SummaryList';

export default function Summary(props) {


    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryList selected={props.selected}
                         USFormat={props.USFormat}></SummaryList>
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {props.USFormat.format(total)}
                </div>
            </div>
        </section>
    )
}