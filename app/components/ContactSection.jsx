import React from 'react'
import Image from 'next/image'

const ContactSection = () => {
    const headerStyle = {
        color: 'white',
        fontWeight: 600,
        fontSize: '2.5rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'end',
        gap: '1rem',
        justifyContent: 'center',
        fontFamily:'Rowdies, sans-serif'
      }
    
      const lineStyle = {
        content: '""',
        height: '4px',
        width: '600px',
        backgroundColor: 'white',
        display: 'block'
      }
    
      return (
        <section id='contact'
        className='mb-20'
            style={{
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
              <div style={lineStyle}></div>
              <h3 style={headerStyle}>Contact</h3>
              <div style={lineStyle}></div>
            </div>
            <div className='md:grid md:grid-cols-[auto,1fr] gap-10 items-start'
            >
                <Image
                    src="/Images/main2.jpg"
                    alt="Main Image"
                    width={250}
                    height={250}
                    className='mt-5 lg:block hidden'
                    style={{
                    borderRadius: '5%',
                    width: '100%',
                    maxWidth: '350px',
                    height: 'auto',
                    objectFit: 'cover'
                    }}
                />
                <h1 className='mt-8 text-[#ADB7BE] flex flex-col text-xl text-center lg:pr-10 ' style={{ justifySelf: 'end', fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal'}}> EMAIL: kevinzh06x@gmail.com
                </h1>
            </div>
        </section>

      )
}

export default ContactSection