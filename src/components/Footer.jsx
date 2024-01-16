import React from "react";
import '../css/footer.css';

function Footer(){
    return(
       <section className="footer_section">
           <div className="footer">
            <div>
                <div className="footer_title">Trippy</div>
                <div className="footer_sub_title">Choose your favourite destination</div>
            </div>
            <div className="footer_content">
                <div className="footer_subpart">
                    <div className="footer_heading">Project</div>
                    <div className="footer_sub_heading">Changelog</div>
                    <div className="footer_sub_heading">Status</div>
                    <div className="footer_sub_heading">License</div>
                    <div className="footer_sub_heading">All Versions</div>
                </div>
                <div className="footer_subpart">
                    <div className="footer_heading">Community</div>
                    <div className="footer_sub_heading">Github</div>
                    <div className="footer_sub_heading">Issues</div>
                    <div className="footer_sub_heading">Project</div>
                    <div className="footer_sub_heading">Twitter</div>
                </div>
                <div className="footer_subpart">
                    <div className="footer_heading">Help</div>
                    <div className="footer_sub_heading">Support</div>
                    <div className="footer_sub_heading">Troubleshooting</div>
                    <div className="footer_sub_heading">Contect us</div>
                </div>
                <div className="footer_subpart">
                    <div className="footer_heading">Other</div>
                    <div className="footer_sub_heading">Terms of Services</div>
                    <div className="footer_sub_heading">Privacy Policy</div>
                    <div className="footer_sub_heading">License</div>
                </div>
            </div>
           </div>
       </section>
    );
}

export default Footer;