import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.SVG";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import api from "../../src/api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");

    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });

    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount");

    // clearTimeout(this.timeoutId);
  }

  render() {
    console.log("2/4. render()");

    if (this.state.loading === true) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="/badges/new">
              New Badge
            </Link>
          </div>

          <div>
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
