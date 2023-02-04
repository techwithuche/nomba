import React from "react";

export default function Home() {
  return (
    <>
      <section class="Payment_wrapper">
        <div class="Payment_title">
          You've got options. <br />
          Recieve payments on your terms
        </div>
        <div class="Payment_container">
          <div class="Payment_subtitle">ACCEPT ALL BANK CARDS</div>
          <div class="Payment_subdescription">
            Recieve your card payments through the <br />
            Nomba POS terminals
          </div>
        </div>

        <div class="Payment_container">
          <div class="Payment_subtitle">TRANSFER TO AN ACCOUNT</div>
          <div class="Payment_subdescription">
            With an account number, you can take
            <br /> payment into your account through
            <br /> transfers
          </div>
        </div>

        <div class="Payment_container">
          <div class="Payment_subtitle">SCAN A QR CODE</div>
          <div class="Payment_subdescription">
            Accept QR payment through codes and 
            <br /> review transactions on your POS terminal 
          </div>
        </div>
      </section>
    </>
  );
}
