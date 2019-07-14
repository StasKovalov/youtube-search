import React, { Component } from 'react'
import Select from '../UI/Select/Select';
import './SwitchLang.css';

class  SwitchLang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: false,
        }
    }

    onSelectClick = () => {
        this.setState(prevState => ({select: !prevState.select}))
    }

  render() {
      return (
        <div className = 'switch-lang'>
            <Select changeLang = {this.props.click}
                    select = {this.state.select} 
                    lang={this.props.lang}
                    click = {this.onSelectClick}/>
        </div>
      )
  }
}

export default SwitchLang;