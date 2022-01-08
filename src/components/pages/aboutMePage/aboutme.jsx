import React, { Component } from 'react'


export default class AboutMe extends Component {

render() {
  return (
    <section id="about" className="s-about target-section">
        <div className="about-me">
            <div className="row heading-block" data-aos="fade-up">
            <div className="column large-full">
                <h2 className="section-heading">About Me</h2>
            </div>
            </div>
            <div className="row about-me__content" data-aos="fade-up">
            <div className="column large-full about-me__text">
                <p className="lead">
                Nulla aspernatur nam et accusantium. Tempore delectus dignissimos aut
                ab commodi. Labore et cupiditate temporibus odio debitis eaque.
                Officia provident aut iste et dicta perferendis. Velit iure adipisci.
                Molestiae qui fuga rerum facilis.
                </p>
                <p>
                Reprehenderit quia id facilis nihil odit perferendis fugiat quidem
                voluptas. Non ratione tenetur. Quis earum quia deleniti fugit fugiat
                minus omnis. Iure dolore dolorum. Aspernatur quos cumque ea dolorum
                nemo nihil beatae magnam. Qui molestiae rem. Maxime enim provident
                ipsum reprehenderit tenetur. Et cupiditate repellendus. Et modi ipsum
                aut harum. Ratione alias.
                </p>
                <p>
                Rerum consequatur dolore quae. Qui excepturi facilis quam quae quasi.
                Mollitia occaecati minus voluptas veniam. Qui excepturi facilis quam
                quae quasi. Mollitia occaecati minus voluptas veniam. Est est
                occaecati dolor qui aut et eum. Aspernatur quos cumque ea dolorum nemo
                nihil beatae magnam. Qui molestiae rem.
                </p>
                <p>
                Maxime enim provident ipsum reprehenderit tenetur. Et cupiditate
                repellendus. Et modi ipsum aut harum. Ratione alias sed. Rerum
                consequatur dolore quae. Qui excepturi facilis quam quae quasi.
                Mollitia occaecati minus voluptas veniam. Est est occaecati dolor qui
                aut et eum. Aspernatur quos cumque ea dolorum nemo nihil beatae
                magnam. Qui molestiae rem. Aspernatur quos cumque ea dolorum nemo
                nihil. Qui molestiae rem.
                </p>
            </div>
            </div>
            <div className="row about-me__buttons">
            <div className="column large-half tab-full" data-aos="fade-up">
                <a href="#0" className="btn btn--stroke full-width">
                Hire Me
                </a>
            </div>
            <div className="column large-half tab-full" data-aos="fade-up">
                <a href="#0" className="btn btn--primary full-width">
                Download CV
                </a>
            </div>
            </div>
        </div>
    </section>
  )
 }
}