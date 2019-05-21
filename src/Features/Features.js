import React from 'react';
import FeatureItems from './FeatureItems/FeatureItems.js';

class Features extends React.Component {

  render() {

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <FeatureItems 
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      </section>
    )
  }
}

export default Features