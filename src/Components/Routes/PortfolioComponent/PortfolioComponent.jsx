import React from "react";

function PortfolioComponent() {
  return (
    <div>
      <div className="Name">Janani D</div>
      <section id="about">
        I'm a student currently in 3rd year, pursuing Computer Science
        Engineering. I wish to secure a responsible career opportunity to fully
        utilize my training and skills, while making a significant contribution
        to the success of the organisation. I'm a dedicated individual looking
        ahead for a challenging role at a progressive organisation that offers
        immense growth opportunities and to implement my advanced knowledge and
        skills
      </section>

      <div class="edu">
        <h3 class="title">Education</h3>
        <div class="edu_item">
          <p class="item_preTitle">2020-2024</p>
          <h4 class="item_title">B.E in CSE - 8.89 CGPA until 5th semester</h4>
          <p class="item_subtitle">Saveetha Engineering Coolege</p>
        </div>
        <div class="edu_item">
          <p class="item_preTitle">2018-2020</p>
          <h4 class="item_title">Grade XII - 75%</h4>
          <p class="item_subtitle">Sri R.M.Jain Vidhyashram</p>
        </div>
        <div class="edu_item">
          <p class="item_preTitle">2017-2018</p>
          <h4 class="item_title">Grade X - 85%</h4>
          <p class="item_subtitle">Sri R.M.Jain Vidhyashram</p>
        </div>
      </div>

      <div class="interest">
        <h3 class="title">Interest</h3>
        <div class="interest_items">
          <div class="interest_item">
            <span>Drawings</span>
          </div>
          <div class="interest_item">
            <span>Books</span>
          </div>
          <div class="interest_item">
            <span>Travel</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioComponent;
