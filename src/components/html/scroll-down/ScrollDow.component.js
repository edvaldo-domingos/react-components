import React from "react";
import "./ScrollDown.css";

const ScrollDow = () => {
      return (
            <>
                  <section id="sec-1">
                        <div class="container">
                              <h1>Hello World</h1>
                              <a href="#sec-2">
                                    <div class="scroll-down"></div>
                              </a>
                        </div>
                  </section>
                  <section id="sec-2">
                        <div class="container">
                              <h1>This is Sec 2</h1>
                        </div>
                  </section>
            </>
      );
};

export default ScrollDow;
