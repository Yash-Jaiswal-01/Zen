import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/Context'



const Main = () => {
 

  const { input, setInput, recentPrompt, showResult, loading, resultData, onSent } = useContext(Context)

  

  return (

   
    <div className="main">
      
      <div className="nav">
        <p> Zen  </p>
       
        <img src="public/b5ae3e1e-0950-4bb9-8b9c-92a9e8c06fcc.jpeg" alt="" />
      </div>
      <div className="main-container">
     

        {!showResult
          ? <>

            <div className="greet">
              <p><span>Hello , Myself Zen </span></p>
              <p>How can I help you today ? </p>
            </div>

            <div className="cards">
              <div className="card">
                <p> Suggest beutiful places to see an upcoming road trip   </p>
                <img src="compass_icon.png" alt="" />
              </div>


              <div className="card">
                <p> Briefly summarize this concept : urban planning    </p>
                <img src="bulb_icon.png" alt="" />
              </div>

              <div className="card">
                <p> Brainstorm  team bonding activities for our work retreats   </p>
                <img src="message_icon.png" alt="" />
              </div>

              <div className="card">
                <p>Improve the readability of the following code   </p>
                <img src="code_icon.png" alt="" />
              </div>
            </div>
          </>
          : <div className="result">
            <div className="result-title">
              <img src="public/6942ce0b-4fdb-483f-92ae-c4b467cf4880.jpeg" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="zen11_icon.png" alt="" />
             {loading
             ? <div className="loader">
                <hr />
                <hr />
                <hr /> 
             </div>
             : <p dangerouslySetInnerHTML={{__html: resultData}}></p> }
            </div>
          </div>

        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
           
           {input?<img onClick={() => onSent()} src="send_icon.png" alt="" />:null} 
          </div>
          <p className='bottom-info'>
            Zen may display inaccurate info , including about people so double check its responses .

          </p>


        </div>



      </div>

    </div>

  )
}

export default Main
