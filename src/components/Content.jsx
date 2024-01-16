import React from "react";
import '../css/content.css';
import ghumi from "../images/ghumi.jpg"
import ghumi2 from "../images/ghumi2.jpg"
import ghumi3 from "../images/ghum3.jpg"
function Content(){
    return(
        <section className="content_section">
            <div className="heading_section">
                <div className="heading">Popular Destinations</div>
                <div className="sub_heading">Tours give you the opportunity to see a lot, within a time frame</div>
            </div>  
            <div className="main_body">
                <div className="container1">
                    <div className="Content_title">Taal Volcano, Batangas</div>
                    <div className="text">One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!</div>
                </div>
                <div className="images"><img className="pic" src={ghumi} alt="" /></div>
            </div>

            <div className="main_body">
                <div className="images"><img className="pic" src={ghumi2} alt="" /></div>
                <div className="container1">
                    <div className="Content_title">Mt. Daguldul, Batangas</div>
                    <div className="text">If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim.</div>
                </div>
            </div>

            <div className="next_part">
                <div className="centre">
                    <div className="heading">Recent Trips</div>
                    <div className="sub_heading">You can discover unique destinations using Google Maps.</div>
                </div>
                <div className="Second_main_body">
                    <div class="second_part">
                        <div className="image"><img className="pic" src={ghumi} alt="" /></div>
                        <div className="second_title">Trip in Indonesia</div>
                        <div className="second_content">Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</div>
                    </div>
                    <div className="second_part">
                        <div className="image"><img className="pic" src={ghumi3} alt="" /></div>
                        <div className="second_title">Trip in Malaysia</div>
                        <div className="second_content">Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.</div>
                    </div>
                    <div className="second_part">
                        <div className="image"><img className="pic" src={ghumi2} alt="" /></div>
                        <div className="second_title">Trip in France</div>
                        <div className="second_content">Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Content;