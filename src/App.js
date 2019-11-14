import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'styled-components';
import MainContent from './elements/MainContent';
import Menu from './components/Menu';
import Table from './components/Table';
import theme from './themes/theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      randomized: null,
      inactive: null,
      all: null,
      randomizedPatients: [],
      inactivePatients: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:3000/patients`);
    const json = await response.json();

    const randomizedCount = json.filter(item => item.status === 'randomized'); 
    const inactiveCount = json.filter(item => item.status === 'inactive'); 

    this.setState({ 
      data: json,
      randomizedPatients: randomizedCount,
      inactivePatients: inactiveCount,
      randomized: randomizedCount.length,
      inactive: inactiveCount.length,
      all: json.length 
    });
  }

  render() {

    const { 
      data, 
      all, 
      randomized, 
      inactive, 
      randomizedPatients, 
      inactivePatients 
    } = this.state;

    return(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <MainContent className="container">
              <div>
                <Menu 
                  all={all} 
                  randomized={randomized} 
                  inactive={inactive}
                />
                <Switch>
                  <Route exact path="/" render={props => <Table {...props} 
                    type="all" 
                    allPatients={data}
                    inactivePatients={inactivePatients}
                    randomizedPatients={randomizedPatients}
                  />} />
                  <Route path="/randomized" render={props => <Table {...props} 
                    type="randomized" 
                    allPatients={data}
                    inactivePatients={inactivePatients}
                    randomizedPatients={randomizedPatients}
                  />} />
                  <Route path="/inactive" render={props => <Table {...props} 
                    type="inactive" 
                    allPatients={data}
                    inactivePatients={inactivePatients}
                    randomizedPatients={randomizedPatients}
                  />} />
                </Switch>
              </div>
            </MainContent>
          </ThemeProvider>
        </BrowserRouter>
    );
  }
}

export default App