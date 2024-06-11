import "./Project.css"
import React from 'react'
import logo from "../images/logo.png"
export default function Headersection() {
    let header = [{ navbars1: "HOME", navbars2: "SERVICE", navbars3: "ABOUT", navbars4: "PROJECT", navbars5: "BLOG", navbars6: "TESTIMONIAL", navbars7: "CONTACT US", login: "Login", }]
    let carosal = [{ h1: "BUILDER", h2: "CONSTRUCTION", h3: "SERVICE", p1: " Lorem ipsum dolor sit amet consectetur adipisicing elit.", p2: "Obcaecati vitae, exercitationem tenetur tempore alias nemo", contact: "Contact Us", about: "About Us" }]
    function btn() {
        let bt = document.getElementById("block")
        bt.classList.toggle("sh")
    }
    return (
        <div id="head">
            <div className='backsection'>
                <div>
                    <img src={logo} alt="" />
                    {header.map((item) => (
                        <ol className="navsec" id="block">
                            <li>{item.navbars1}</li>
                            <li> <a href="#our">{item.navbars2}</a></li>
                            <li><a href="#about">{item.navbars3}</a></li>
                            <li><a href="#pro">{item.navbars4}</a></li>
                            <li><a href="#pro">{item.navbars5}</a></li>
                            <li><a href="#test">{item.navbars6}</a></li>
                            <li><a href="#contact">{item.navbars7}</a></li>
                            <li>Login</li>
                            <li><i class="fa-solid fa-user"></i></li>
                            <li className="get">GET A QUOTE</li>
                        </ol>
                    ))}
                    <button onClick={btn} className="navbtn"><i class="fa-solid fa-bars"></i></button>
                </div>
                <br /> <br />
                <div className="carosalsection">
                    {carosal.map((item) => (
                        <div>
                            <h1>
                                {item.h1} <br />
                                {item.h2} <br />
                                {item.h3} <br />
                            </h1>
                            <p>
                                {item.p1} <br />
                                {item.p2}
                            </p>
                            <br />
                            <div>
                                <a href="#head">{item.contact}</a>
                                <a href="#head" style={{ color: "white", background: "black" }}>{item.about}</a>
                            </div>
                        </div>
                    ))}
                </div> <br /> <br />  <br /> <br /> <br />
            </div>
            <div className="btn">
                {/* <button><i class="fa-solid fa-angle-right fa-2xl"></i></button> <br /> <br />
                <button style={{ color: "black", background: "white" }}><i class="fa-solid fa-angle-left fa-2xl"></i></button> */}
            </div>
        </div>
    )
}
