import React,{PureComponent} from 'react';
import PropType from 'prop-types';

import './SearchInput.css';

class SearchInput extends PureComponent{
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render(){
    return(
      <div className="component-search-input">
        <div>
          <input onchange={this.handleChange}/>
        </div>
      </div>
    )
  }  
}

SearchInput.propTypes = {
  textChange:PropType.func,
};
export default SearchInput;