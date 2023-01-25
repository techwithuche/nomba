import React from "react";

export default function Home() {
  return (
    <>
      <section class="AccountSection_wrapper">
        <div class="container">
          <div class="row AccountSection_contentRow">
            <div class="AccountSection col-lg-7">
              <div class="AccountSection_title">
                Get a free <span>Nomba</span> account
              </div>
              <div class="AccountSection_description">
                Change how you spend, manage and save money
              </div>
              <div class="AccountSection_button AccountSection_button_text">
                GooglePlay
              </div>
            </div>
            <div class="AccountSection_phone_display col-lg-5">
              <img src="./public/assets/Images/preview.png" alt="Preview" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
