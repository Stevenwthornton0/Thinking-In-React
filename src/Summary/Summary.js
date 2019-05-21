import React from 'react';
import Total from './Total/Total.js';
import SummaryItems from './SummaryItems/SummaryItems';

class Summary extends React.Component {
  render() {

    return(
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        <SummaryItems selected={this.props.selected}/>
        <Total selected={this.props.selected}/>
        
      </section>
    )
  }
}

export default Summary