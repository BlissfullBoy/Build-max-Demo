import React from 'react'
import "./Project.css"
export default function Topdetails() {
  let contact = [{ phone: "+01-40-114-6855" ,  gamil: "raj@gmail.com" ,  place: "Mordern Tawon Mosco" }]
  return (
    <div>
        {contact.map((item) => (
          <div className='contact'>
            <p><i class="fas fa-phone"></i> {item.phone}</p>
            <p><i class="fa-solid fa-envelope"></i> {item.gamil}</p>
            <p><i class="fa-solid fa-location-dot"></i> {item.place}</p>
          </div>
        ))}
    </div>  
  )
}