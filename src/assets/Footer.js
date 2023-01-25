
import React, { Component } from "react";
import { withRouter } from "next/router";

class Index extends Component {
  render() {
    return (
      <>
        <footer class="Footer_wrapper">
          <div class="container">
            <div class="row">
              <div class="Footer_content col-lg-9">
                <nav class="Footer_navigation">
                  <div class="Footer_Header_Item">Products</div>
                  <div class="Footer_Item">Accept payments</div>
                  <div class="Footer_Item">Make payents</div>
                  <div class="Footer_Item">POS Terminal</div>
                </nav>

                <nav class="Footer_navigation">
                  <div class="Footer_Header_Item">Business Types</div>
                  <div class="Footer_Item">Mobile Money Agent</div>
                  <div class="Footer_Item">Small Business</div>
                  <div class="Footer_Item">Large Business</div>
                </nav>

                <nav class="Footer_navigation">
                  <div class="Footer_Header_Item">Nomba</div>
                  <div class="Footer_Item">About Us</div>
                  <div class="Footer_Item">Blog</div>
                  <div class="Footer_Item">Work with Nomba</div>
                </nav>

                <nav class="Footer_navigation">
                  <div class="Footer_Header_Item">Follow us</div>
                  <div class="Footer_Item">Instagram</div>
                  <div class="Footer_Item">Twitter</div>
                  <div class="Footer_Item">Youtube</div>
                </nav>
              </div>
              <div class="Footer_spacer col-lg-3"></div>
            </div>

            <div class="row">
              <div class="Footer_content col-lg-9">
                <nav class="Footer_navigation">
                  <div class="Footer_Header_Item">Contact Us</div>
                  <div class="Footer_Item">01888886</div>
                  <div class="Footer_Item">015200061</div>
                  <div class="Footer_Item">support@nomba.com</div>
                </nav>
              </div>
              <div class="Footer_spacer col-lg-3"></div>
            </div>

            <div class="row">
              <div class="Footer_content_logo col-lg-9">
                <div class="">
                  <a class="">
                    <svg
                      class="w-[94px] "
                      width="200"
                      height="41"
                      viewBox="0 0 174 41"
                      fill="none"
                    >
                      <path
                        d="M65.1187 16.1888V28.8584H60.5674V17.2446C60.5674 14.2532 58.992 12.6695 56.3662 12.6695C53.7404 12.6695 51.8149 14.4292 51.8149 17.5966V28.6824H47.2636V8.97425H51.2897L51.8149 11.4378C53.2153 9.50215 55.4909 8.44635 58.2917 8.44635C62.1429 8.44635 65.1187 11.6137 65.1187 16.1888ZM68.7948 18.8283C68.7948 12.8455 73.5211 8.27039 79.4728 8.27039C85.4245 8.27039 90.1509 12.6695 90.1509 18.6524C90.1509 24.6352 85.2495 29.2103 79.4728 29.2103C73.5211 29.2103 68.7948 24.8112 68.7948 18.8283ZM85.5996 18.8283C85.5996 15.133 82.9738 12.4936 79.4728 12.4936C75.9718 12.4936 73.3461 15.133 73.3461 18.8283C73.3461 22.5236 75.9718 25.1631 79.4728 25.1631C82.9738 25.1631 85.5996 22.5236 85.5996 18.8283ZM123.761 16.0129V28.8584H119.034V17.2446C119.034 14.2532 117.459 12.6695 115.183 12.6695C112.732 12.6695 110.982 14.4292 110.982 17.5966V28.8584H106.431V17.2446C106.431 14.2532 104.855 12.6695 102.579 12.6695C100.129 12.6695 98.3783 14.4292 98.3783 17.5966V28.8584H93.827V8.97425H97.6781L98.2032 11.4378C99.6036 9.67811 101.704 8.44635 104.155 8.44635C106.781 8.44635 109.056 9.85408 110.107 12.3176C111.332 10.03 113.783 8.44635 116.759 8.44635C120.785 8.44635 123.761 11.4378 123.761 16.0129ZM150.193 18.8283C150.193 24.9871 145.642 29.2103 140.215 29.2103C137.239 29.2103 134.789 27.9785 133.038 25.867L132.513 28.8584H128.487V0.703865L133.038 0.17597V11.7897C134.614 9.67811 137.064 8.62232 140.04 8.62232C145.817 8.44635 150.193 12.6695 150.193 18.8283ZM145.642 18.8283C145.642 15.133 143.016 12.4936 139.69 12.4936C136.364 12.4936 133.563 15.133 133.563 18.8283C133.563 22.5236 136.364 25.1631 139.69 25.1631C143.016 25.1631 145.642 22.5236 145.642 18.8283ZM169.974 8.97425H174V28.8584H169.974L169.449 25.867C167.873 28.1545 165.247 29.3863 162.272 29.3863C156.845 29.3863 152.469 25.1631 152.469 19.0043C152.469 12.8455 156.845 8.62232 162.447 8.62232C165.423 8.62232 167.873 9.85408 169.624 11.9657L169.974 8.97425ZM169.274 18.8283C169.274 15.133 166.473 12.4936 163.147 12.4936C159.821 12.4936 157.195 15.133 157.195 18.8283C157.195 22.5236 159.821 25.1631 163.147 25.1631C166.473 25.1631 169.274 22.5236 169.274 18.8283ZM21.1811 16.5408L24.6821 14.4292L28.1831 12.3176L31.6841 10.206L35.1851 8.09442V0L31.6841 2.11159L28.1831 4.22318L24.6821 6.33477L21.1811 8.44635L17.6801 10.5579V14.6051L14.1791 12.4936L10.6781 10.382L7.00201 8.27039L3.50101 6.1588L0 4.04721V12.1416L3.50101 14.2532L7.00201 16.3648L10.503 18.4764L14.004 20.588L17.505 22.6996L14.004 24.8112L10.503 26.9227L7.00201 29.0343L3.50101 31.1459L0 32.9056V41L3.50101 38.8884L7.00201 36.7768L10.503 34.6652L14.004 32.5537L17.505 30.4421V26.3948L21.006 28.5064L24.507 30.618L28.008 32.7296L31.5091 34.8412L35.0101 36.9528V28.8584L31.5091 26.7468L28.008 24.6352L24.507 22.5236L21.006 20.412L17.505 18.3004L21.1811 16.5408Z"
                        fill="#121212"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="Footer_content_terms col-lg-3">
                <div class="Footer_Item">015200061</div>
                <div class="Footer_Item">support@nomba.com</div>
              </div>
              <div class="col-lg-8"></div>
            </div>

            <div class="Footer_bottom_wrapper">
              <div class="container">
                <div class="row Footer_bottom_contentRow">
                  <nav class="Footer_bottom_navigation col-lg-8">
                    <a class="Footer_bottom_text">
                      19b Bosun Adekoya Street, Lekki Phase 1, Lagos, Nigeria
                    </a>
                    <a class="Footer_bottom_text_left">
                      1776 Sacremento St Apt 311 SAN Francisco CA 94109
                    </a>
                  </nav>

                  <div class="Footer_bottom_authSection col-lg-4">
                    <div class="Footer_bottom_text">
                      &#169 2022 Nomba, all rights reserved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
      </>
    );
  }
}

export default withRouter(Index);


