import React, { Component } from 'react'
import PropTypes from "prop-types"
import { navigate, Link } from 'gatsby'
import { TimelineMax, Power1 } from 'gsap'
import Header from "./header"
import Footer from "./footer"
import { globalHistory } from "@reach/router"
import "./normalize.css"
import "./layout.scss"

class Layout extends Component {
  constructor(props) {
    super(props);

    this.location = parseInt(globalHistory.location.pathname.replace("/graphql/", ""), 10) || 0;
    this.minPage = 1;
    this.maxPage = 11;
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.navigate);
    const main = document.querySelector('main');
    const elements = document.querySelectorAll('main > *');
    this.timeline
        .from(main, 0, { opacity: 0, autoAlpha: 0 }, 0.125)
        .staggerFrom(elements, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.0625);
    this.timeline.play();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigate);
  }

  navigate = ({ keyCode }) => {
    if (keyCode === 37 && this.location <= this.minPage) {
      return false;
    } else if (keyCode === 39 && this.location >= this.maxPage) {
      return false;
    } else if (keyCode === 39) {
      navigate(`/graphql/${this.location + 1}`);
    } else if (keyCode === 37) {
      navigate(`/graphql/${this.location - 1}`);
    }
  };

  render() {
    const { children, title } = this.props

    return (
      <section>
        <Header siteTitle={title} />
        <main>{children}</main>
        <nav>
          { this.location > this.minPage ?
            <Link to={`/graphql/${this.location - 1}/`}>⬅️ Poprzedni slajd</Link>
          : null }
          { this.location > this.minPage && this.location < this.maxPage ?
            ` ⚫ `
          : null }
          { this.location < this.maxPage ?
            <Link to={`/graphql/${this.location + 1}/`}>Następny slajd ➡️</Link>
          : null }
        </nav>
        <Footer />
      </section>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
