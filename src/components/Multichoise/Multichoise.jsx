import React, { useEffect, useState ,useRef} from 'react'
import {data }from './../../assets/data'
import './../Quiz/Quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const Multichoise = () => {
    let [index,setIndex]=useState (0);
    let [question,setQuestion]=useState(data[index]);
    let [lock,setLock]=useState(false);
    let [score,setScore]=useState(0);
    let[result,setResult]=useState(false);







    const [time, setTime] = useState(4);
    
  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

    
 
    








    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1,Option2,Option3,Option4];
    const checkAns = (e,ans) =>{
        if (lock=== false) {
            if (question.ans===ans){
                e.target.classList.add("correct");
                // setLock(true);
                setScore(prev=>prev+1)
            }
            else{
                e.target.classList.add("correct")
                // setLock(true);
                // option_array[question.ans-1].current.classList.add("correct")
            } 
        }

        
        
    }
    const next = ()=>{
        if (lock===false) {
            if (index ===data.length-1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () =>{
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        setTime(4);
    }
  return (
     //start quiz
     <div className='zh-container-quiz'>
        
     {result?<></>:<>
     <div className='zh-timer'>
     <p>Time {time}</p>
     </div>
     <h2>{index+1}. {question.question}</h2>
     {/* <ul className='zh-ul'>
         <li ref={Option1} onClick={(e)=>{checkAns (e,1)}}>{question.option1}</li>
         <li ref={Option2} onClick={(e)=>{checkAns (e,2)}}>{question.option2}</li>
         <li ref={Option3} onClick={(e)=>{checkAns (e,3)}}>{question.option3}</li>
         <li ref={Option4} onClick={(e)=>{checkAns (e,4)}}>{question.option4}</li>
     </ul> */}


     <ul className='zh-ul'>
            <div>
            <FontAwesomeIcon icon={faCircleCheck} /><li ref={Option1} onClick={(e)=>{checkAns (e,1)}}>{question.option1}</li>
            </div>
            <div>
            <FontAwesomeIcon icon={faCircleCheck} /> <li ref={Option2} onClick={(e)=>{checkAns (e,2)}}>{question.option2}</li>
            </div>
            <div>
            <FontAwesomeIcon icon={faCircleCheck} /> <li ref={Option3} onClick={(e)=>{checkAns (e,3)}}>{question.option3}</li>
            </div>
            <div>
            <FontAwesomeIcon icon={faCircleCheck} /> <li ref={Option4} onClick={(e)=>{checkAns (e,4)}}>{question.option4}</li>
            </div>
        </ul>
     <div className='zh-btn-text-quiz'>
     <button onClick={next}>Next Question</button>
     <div className='zh-index'>{index+1} of {data.length} qustions</div>
     </div>
     </>}
     {result?<>
         <div className='zh-score-quiz'>
         {/* <h3>You scored {score} out of {data.length}</h3> */}
     <button onClick={reset} className='reset'>Reset</button>
         </div>
     </>:<></>}
     {/* {time<=0?<>

       <div className='zh-timer'>
       
     <p>Time {time}</p>
     </div>
     <h2>{index+1}. {question.question}</h2>
     <ul className='zh-ul'>
         <li ref={Option1} onClick={(e)=>{checkAns (e,1)}}>{question.option1}</li>
         <li ref={Option2} onClick={(e)=>{checkAns (e,2)}}>{question.option2}</li>
         <li ref={Option3} onClick={(e)=>{checkAns (e,3)}}>{question.option3}</li>
         <li ref={Option4} onClick={(e)=>{checkAns (e,4)}}>{question.option4}</li>
     </ul>
     <button onClick={next}>Next Question</button>
     <div className='zh-index'>{index+1} of {data.length} qustions</div>
       <div className='zh-score-quiz'>
       <h3>You Lose</h3>
       <button onClick={reset} className='reset'>Reset</button>
       </div>
     </>:<></>} */}
 </div>
  )
}

export default Multichoise