import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { switchPage } from './redux/actions'
import Banner from './Banner';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.css'
import MarkdownContent from './MarkdownContent';

class Page extends Component {
  constructor(props) {
    super(props);
    this.pageName = null;
  }

  componentDidMount() {
    console.log("this.pageName", this.pageName);
    if (this.pageName) {
      this.props.switchPage(this.pageName);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className='page'>
          <Banner Text='Hey, I am updating this site! Come back later!'/>
          <Switch>
            <Route exact path='/:pageName'
              render={(props) => {
                const pageName = props.match.params.pageName.toLowerCase();
                this.pageName = pageName;  // deprecated, find a better way to do this!
                return <Content />;
              }}
            />
            <Route path='/post/:alias'
              render={(params) => {
                console.log("Params", params);
                return <MarkdownContent Alias={params.match.params.alias} />;
              }
            }/>
            <Route path='/'
              render={() => {
                this.pageName = 'home';  // deprecated, find a better way to do this!
                return <Content />;
              }
            }/>
          </Switch>
          <p></p>
          <p className='copy-right disable-select'>&copy; 2018 Ming Yu.</p>
        </div>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => {
  return { 
    redirect: state.pageReducer.redirect,
    pageName: state.pageReducer.pageName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchPage: (pageName) => dispatch(switchPage(pageName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);