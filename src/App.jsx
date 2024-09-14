import './App.css'
import logo from './logo.svg'
import chat from './chat.svg'
import tugadi from './tugadi.svg'


function App() {
  return (
    <>

      <div className='container'>
        <div className="tepa">
          <div className='chap'><img src={logo} alt="LOGO" /></div>
          <div style={{ fontFamily: 'Plus Jakarta Sans , sans serif' }}>
            <div className='orta'>
              <a href='#' className="p">HOME</a>
              <a href='#' className="p">ABOUT US</a>
              <a href='#' className="p">SERVICES</a>
              <a href='#' className="p">PROJECTS</a>
              <a href='#' className="p">BLOG</a>
            </div>
          </div>


          <div className='ong'>
            <div className="chat"><img src={chat} alt="chat" /></div>
            <div style={{ fontFamily: 'Plus Jakarta Sans , sans serif' }}>
              <span className='chatt'>
                <p className='need'>Need help?</p>
                <a href='#'>(307) 555-0133</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="back">
        <div className="container">
          <div style={{ fontFamily: 'Plus Jakarta Sans , sans serif' }}>
            <div className="backyozuv">Journey with Confidence <span className="green">Migrate</span> with Us <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p></div>
          </div>
          <div style={{ fontFamily: 'Plus Jakarta Sans , sans serif' }}>
            <button className='button'>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Learn More</span>
            </button>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="about">
          <div className="img">
            <img src={tugadi} alt="" />
          </div>
          <div style={{ fontFamily: 'Plus Jakarta Sans , sans serif' }}>
          <div className="content">
             <p className='p1'>About Us</p>
             <h3>Unknown Wanderlust Your Journey into</h3>
             <div className='div'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</div>
             <div className="kichkina">
             <div className="kichik">
               <input type="checkbox"/>
               <span className='chek'>Safety Guides</span>
               <p className="p2">Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
              </div>
              <div className="kichik">
               <input type="checkbox"/>
               <span className='chek'>Safety Guides</span>
               <p className="p2">Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
              </div>
             </div>
             <button className='button1'>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Learn More</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App