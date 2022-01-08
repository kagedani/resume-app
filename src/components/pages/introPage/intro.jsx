import React, { Component } from 'react'


export default class Intro extends Component {

render() {
  return (
    <>
    <section id="intro" className="s-intro target-section">
      <div className="row intro-content">
        <div className="column large-9 mob-full intro-text">
          <h3>Hello, my name is Daniele Uboldi</h3>
          <h1>
            Data Engineer <br />
            Based In Monza
          </h1>
        </div>
        <div className="intro-scroll">
          <a href="#about" className="intro-scroll-link smoothscroll">
            Scroll For More
          </a>
        </div>
        <div className="intro-grid" />
        <div className="intro-pic" />
      </div>{" "}
    </section>{" "}
    </>
  )
 }
}