import React from 'react'
import data from '../Pages/restApi.json';

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore hic porro ea accusamus voluptate eos, necessitatibus fuga ratione incidunt numquam nostrum sapiente rerum rem blanditiis expedita cupiditate laborum! Sunt molestiae cumque maiores numquam animi! Veniam ut, voluptatibus dolorum rerum voluptates enim. Nesciunt, modi exercitationem incidunt quae sequi sint accusamus.</p>

            </div>
            <div className="dishes_container">
                {
                    data.data[0].dishes.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu