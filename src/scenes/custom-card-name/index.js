import React, { Component } from "react";
import {CustomCardNameContainer, Navigation} from "./components/CustomCard.styled";
import {Link, Route, Switch} from "react-router-dom";
import CardName from "./components/CardName";
import DesignForm from "./components/DesignForm";
import DataForm from "./components/DataForm";

class CustomCardName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: window.location.pathname.replace('/card-name', '').replace('/', '') || 'home',
      customStyles: {
        backgroundSideFront: '#163A41',
        backgroundSideBack: '#163A41',
        borderColor: '#B38865',
        companyColor: '#B38865',
        nameColor: '#B38865',
        positionColor: '#B38865',
        contactColor: '#B38865'
      },
      customData: {
        companyName: 'SKYDU ACADEMY',
        name: 'Sebuah Nama',
        position: 'Jabatan',
        phone: '08923123423',
        email: 'nama@skydu.academy',
        website: 'skydu.academy'
      }
    }
  }

  setColor = (customStyles) => {
    this.setState({customStyles: customStyles })
  };

  setData = (customData) => {
    this.setState({customData: customData })
  };

  navigate(path) {
    this.setState({currentPath: path})
    
  }

  render() {
    return (
        <CustomCardNameContainer>
          <h1>Kustom Kartu Nama</h1>
          <Navigation>
            <Navigation.Item active={this.state.currentPath === 'home'} onClick={() => this.navigate('home')}><Link to='/card-name'>Kustom Desain</Link></Navigation.Item>
            <Navigation.Item active={this.state.currentPath === 'data'} onClick={() => this.navigate('data')}><Link to='/card-name/data'>Kustom Data</Link></Navigation.Item>
            <Navigation.Item active={this.state.currentPath === 'preview'} onClick={() => this.navigate('preview')}><Link to='/card-name/preview'>Preview</Link></Navigation.Item>
          </Navigation>

          <div>
            <Switch>
              <Route exact path="/card-name">
                <DesignForm setColor={this.setColor} customStyles={this.state.customStyles}/>
                <CardName styles={this.state.customStyles} data={this.state.customData}/>
              </Route>
              <Route exact path="/card-name/data">
                <DataForm setData={this.setData} customData={this.state.customData}/>
                <CardName styles={this.state.customStyles} data={this.state.customData}/>
              </Route>
              <Route exact path="/card-name/preview">
                <CardName styles={this.state.customStyles} data={this.state.customData}/>
              </Route>
            </Switch>
          </div>
        </CustomCardNameContainer>
    )
  }
}

export default CustomCardName;