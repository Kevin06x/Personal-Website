import React from 'react'
import Image from 'next/image'
import { MdEmail } from "react-icons/md"
import { FaInstagram, FaYoutube, FaDiscord, FaSpotify  } from "react-icons/fa"


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
        width: '50%',
        maxWidth: '500px',
        backgroundColor: 'white',
        display: 'block'
      }
    
      return (
        <section id='contact'
        className='mb-10'
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
                  src="/Images/main.1.jpg"
                  alt="Main Image"
                  width={250}
                  height={250}
                  className='mt-5 lg:block hidden'
                  style={{
                      borderRadius: '50%',
                      width: '100%',
                      maxWidth: '200px',
                      height: '200px', 
                      objectFit: 'cover',
                      border: '5px solid #BFBABA'
                  }}
              />

              <div className='mt-8 text-[#ADB7BE] flex flex-col text-xl text-center' style={{ justifySelf: 'end', fontFamily: 'Source Code Pro, monospace', fontWeight: 600, fontStyle: 'normal' }}>
                  <div className='flex items-center justify-center'>
                    <MdEmail className='text-4xl mr-2' />
                    <h1>kevinzh06x@gmail.com</h1>
                  </div>
                  <div className='flex justify-center gap-4 mt-10'>
                    <a href='https://instagram.com/Kevin06x' target='_blank' rel='noopener noreferrer'>
                      <button className='p-2 rounded-full hover:bg-gray-300 transition'>
                        <FaInstagram className='text-5xl' />
                      </button>
                    </a>
                    <a href='https://youtube.com/@KevinZhang06x' target='_blank' rel='noopener noreferrer'>
                      <button className='p-2 rounded-full hover:bg-gray-300 transition'>
                        <FaYoutube className='text-5xl' />
                      </button>
                    </a>
                    <a href='https://discordapp.com/users/Kevin06x' target='_blank' rel='noopener noreferrer'>
                      <button className='p-2 rounded-full hover:bg-gray-300 transition'>
                        <FaDiscord className='text-5xl' />
                      </button>
                    </a>
                    <a href='https://open.spotify.com/user/31zupvaniwm7fwfkmpgpgxyjesbe?si=d5EocYSzSH21JqfenxLgGA' target='_blank' rel='noopener noreferrer'>
                      <button className='p-2 rounded-full hover:bg-gray-300 transition'>
                        <FaSpotify className='text-5xl' />
                      </button>
                    </a>
                  </div>
                </div>
            </div>
        </section>

      )
}

export default ContactSection