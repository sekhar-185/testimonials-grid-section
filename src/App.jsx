
import React from 'react'
import Card from './components/Item.jsx'
import  {assets} from './assets/assets.js'

const App = () => {
  
 
  return (
   <div className='container mx-auto my-24 '>
        <div className='sm:grid  gap-4 grid-cols-4 text-[13px] text-gray-100 max-w-[1440px]'>
          
            <div className={`card custom-shadow bg-purple-500 col-span-2 bg-[url('./assets/bg-pattern-quotation.svg')] bg-[position:90%_10px] bg-no-repeat`}>
                  <div className='header'>
                    <img src={assets.image_daniel} alt="" className='img'/>
                      <div >
                          <h2 className='name'>Daniel Clifford</h2>
                          <p className='text-white opacity-50'>Verified Graduate</p>
                      </div>
                  </div>
                      <p className='lead'>I received a job offer mid-course,and the subjects I learned were current,if not mor so, in the company I joined. I honestly feel I got every penny's worth.</p>
                      <p className='quote'>I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people some people who had an amazing experience here. I signed up for the free intro coursse and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best-and most grueling-time of my life. Since completing the course. I've successfull switched careers,working as a Software Engineer at a VR startup.</p>
                  
            </div>

            <div className="card custom-shadow bg-gray-500 ">
                  <div className='header'>
                    <img src={assets.image_jonathan} alt="" className='img' />
                      <div>
                          <h2 className='name'>Jonathan Walters</h2>
                          <p className='text-white opacity-50'> Verified Graduate</p>
                      </div>
                 </div>
                      <p className='lead'>The team was very supportive and kept me motivated</p>
                      <p className='quote'>"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself."</p>
                 
            </div>

            <div className="card custom-shadow !text-black col-start-4 row-span-2 ">
                  <div className='header text-black'>
                    <img src={assets.image_kira} alt=""  className='img'/>
                      <div className=''>
                          <h2 className='name !text-black'>Kira Whittle</h2>
                          <p className='text-black opacity-50'>Verified Graduate</p>
                      </div>
                 </div>
                      <p className='lead !text-black'>Such a life-changing experience. Highly recommended!</p>
                      <p className='quote'>Before joining the bootcamp. I've never written a line of code. I needed some structure from proffessionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderfull things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding, It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often reffred to it during interviews as an example of my development experience. It certainly helped me land a job as as full-stack developer after receiving multiple offers. 100% recommend!</p>
                 
            </div>

            <div className="card custom-shadow !text-black ">
                  <div className='header'>
                    <img src={assets.image_jeanette} alt=""  className='img'/>
                      <div className=''>
                          <h2 className='name !text-black'>Jeanette Harmon</h2>
                          <p className='text-black opacity-50'>Verified Graduate</p>
                      </div>
                  </div>
                      <p className='lead !text-black'>An overall wonderful and rewarding experience</p>
                      <p className='quote'>Thank your for the wonderful experiece! I now have a job I really enjoy, and make a good living while doing something I love.</p>
                  
            </div>

            <div className="card custom-shadow bg-[hsl(219_29%_14%)]  col-span-2 ">
                  <div className='header'>
                    <img src={assets.image_patrick} alt="" className='img' />
                      <div className=''>
                          <h2 className='name'>Patrick Abrams</h2>
                          <p className='text-white opacity-50'>Verified Graduate</p>
                      </div>
                  </div>
                      <p className='lead '>Aswesome teaching support form TAs who did the bootcamp themselves. Getting guidence from them and learning from their experiences was easy.</p>
                      <p className='quote'>The staff seem genuinely concerned about my progress which I find really refreshing, The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amzing people.</p>
                  
            </div>

          
        </div>
    
   </div>
  )
}

export default App
