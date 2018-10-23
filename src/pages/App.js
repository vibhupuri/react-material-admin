import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../components/Header";
import LeftDrawer from "../components/LeftDrawer";
import withWidth, { LARGE, SMALL } from "@material-ui/core/withWidth";
import Data from "../data";
import Dashboard from "./DashboardPage";
import Form from "./FormPage";
import Table from "./TablePage";
import NotFound from "./NotFoundPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 240;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: "80px 20px 20px 15px",
        paddingLeft:
          navDrawerOpen && this.props.width !== SMALL
            ? paddingLeftDrawerOpen
            : 0
      }
    };

    return (
      <div>
        <Header
          styles={styles.header}
          handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(
            this
          )}
        />

        <LeftDrawer
          navDrawerOpen={navDrawerOpen}
          menus={Data.menus}
          username="User Admin"
        />

        <div style={styles.container}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/form" component={Form} />
            <Route path="/table" component={Table} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(App);