// Modules
import React from "react";

import SideMenu from "../components/SideMenu";
import Breadcrumb from "../components/Breadcrumb";
import Energy from "../assets/img/energy.svg";
import Green from "../assets/img/green.svg";
import Pay from "../assets/img/pay.svg";
import Balloons from "../assets/img/balloons.svg";

function Comparing() {
    const imgWidth = "250px"
    const content =
        <div class="container">
            <div class="card">
                <header class="card-header has-background-primary">
                    <p class="card-header-title">
                        <strong class="has-text-white">Comparing with Existing Alternatives</strong>
                    </p>
                </header>
                <div class="card-content has-text-justified">
                    <div class="columns is-vcentered is-centered has-text-centered-mobile is-variable">
                        <div class="column">
                            <figure class="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                <img src={Energy} alt="Maintanence" />
                            </figure>
                        </div>
                        <div class="column is-two-thirds">
                            <p>“We’ve got the good old air conditioners and heaters with a great energy rating to regulate our houses’ temperature. Why would we want to invest time and money on switching to green infrastructure when our current methods do not impact the environment much?” If that’s the question on your mind, you’ve come to the right place to get it answered!</p>
                            <br />
                            <p>Granted, air-conditioners and heaters do their jobs efficiently. But have you ever thought about at what cost? (No, we are not just talking about the cost of installation!)</p>
                        </div>
                    </div>
                    <div class="columns is-vcentered is-centered has-text-centered-mobile is-variable">
                        <div class="column is-two-thirds">
                            <p><strong>Let’s talk about Mother Nature first. </strong>Most of the products developed for HVAC today are way better than the ones manufactured probably a decade ago both in terms of the kind of refrigerant used and also in terms of energy rating. However, imagine a hot sunny day or a really cold day in Melbourne. (I am sure you agree we get a lot of both!) and having your air-conditioner or heater turned on for most of the day. Total carbon produced by using a regular 1.5-ton AC is 5728 g per day, which is about 5.7 kg, therefore per year it will be 1368 kg if the air conditioner works for 20 days during summer as an average. This is just in a single home. Now imagine this with respect to all the households in just your area. The CO2 produced can cause an unnatural heating of the atmosphere, which can lead to a lot of impact on the environment. This just means that an average HVAC equipment cools your home everyday at the expense of warming the atmosphere.</p>
                            <br />
                            <p>Green infrastructure, however, can regulate temperatures on underlying roof materials and rooms in the buildings below through shading, insulation, increased albedo and evapotranspiration. Improved thermal performance of buildings will reduce energy demand for cooling and heating which means that you can still regulate your home temperature without adversely affecting the environment! Win-win!</p>
                        </div>
                        <div class="column">
                            <figure class="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                <img src={Green} alt="Maintanence" />
                            </figure>
                        </div>
                    </div>
                    <div class="columns is-vcentered is-centered has-text-centered-mobile is-variable">
                        <div class="column">
                            <figure class="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                <img src={Pay} alt="Maintanence" />
                            </figure>
                        </div>
                        <div class="column is-two-thirds">
                            <p><strong>Now let’s talk about you and your family! </strong>Air conditioning in a space can cost between 30 to 40 cents an hour and add $100-150 to your electricity bill. Studies show that for every degree lower than 23 degrees you’ll have to go for your air conditioner it can add up to 10% to your running costs. Now think about what that means regarding your electricity bill.</p>
                            <br />
                            <p>Moreover, while air conditioning offers relief from oppressive heat and humidity, there are also some health concerns that people should be aware of. An article by the Centre for Disease Control states that unless systems are cleaned regularly, air conditioners can be a source of health issues. Air contamination can become a severe problem that contributes to respiratory ailments in people. Additionally, air conditioning at work and home can lead to problems, such as colds, fevers, headaches and fatigue.</p>
                        </div>
                    </div>
                    <div class="columns is-vcentered is-centered has-text-centered-mobile is-variable">
                        <div class="column is-two-thirds">
                            <p><strong>How will green infrastructure help you and your family? </strong>Estimations have shown energy savings from green roofs at 15-45% of annual energy consumption, mainly from reducing costs for cooling. For example, in New York it was estimated that providing 50% green roof cover within the metropolitan area would lead to an average 0.1-0.8°C reduction in surface temperatures. It was noted that for every degree reduction in the urban heat island effect roughly 495 million KWh of energy would be saved.</p>
                            <br />
                            <p>An accessible green roof increases urban green space and can provide an aesthetically pleasing view or environment. Less accessible extensive roofs can still have high visual amenity and can assist in health and wellbeing of people living in apartments. In a Melbourne study of 150 individuals, it was found that 40 second micro-breaks spent viewing a virtual city scene with a flowering meadow green roof led to a significant improvement compared to those that viewed a virtual city scene with a bare concrete roof. The green roof scene was perceived by participants as more restorative, as well as boosting their concentration levels by 6%. This was associated, in turn, with better performance and lower tension. </p>
                        </div>
                        <div class="column">
                            <figure class="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                <img src={Balloons} alt="Maintanence" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    return (
        <>
            <Breadcrumb parent="Guidelines" child="Comparing with Existing Alternatives" />
            <SideMenu content={content} comparing="is-active" />
        </>
    );
}

export default Comparing;