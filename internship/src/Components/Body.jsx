import "./body.css";
import { AiOutlineBulb } from "react-icons/ai";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { LuSquare } from "react-icons/lu";
import img2 from "./images/logo2.jpg";
import img3 from './images/logo3.jpg';
import { MdAddCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Body() {
  return (
    <div className="body">
      <h2>Relations and Function ( Mathematics )</h2>
      <div>
        <table className="table">
          <tr>
            <td>
              <span>Study</span>
            </td>
            <td>Quiz</td>
            <td>Test</td>
            <td>Game</td>
            <td>Others</td>
          </tr>
        </table>
        <div className="div">
          <div className="box-icon">
            <AiOutlineBulb />
            <IoMdVolumeHigh />
          </div>
          <h2 className="box-text">9 + 6 + 7x - 2x -3</h2>
        </div>
        <div className="adjust">
          <IoReloadSharp />
          <div className="adjust2">
            <IoIosArrowDropleftCircle />
            <h6>01/10</h6>
            <IoIosArrowDroprightCircle />
          </div>
          <LuSquare />
        </div>
      </div>
      <div className="biv3"> 
      <img className='img2' src={img2} className="img2"/>
      <div className="pb">
        <p>Published by</p>
        <img src={img3}/>
      </div>
      <div className="addc">
        <MdAddCircle className="icon4" />
        <h3>Create Flashcard</h3>
      </div>
      </div>

      <div className="dove"> 
        <h1 className="h1bb">FAQ</h1>
        <div className="tab5">Can education flashcard be used for all age groups?
        <IoIosArrowDown className="king1"/> </div>
        <div className="tab5">How do education flashcard work? 
        <IoIosArrowDown className="king2"/>
        </div>
        <div className="tab5">Can education flashcard be used for test preparation?
        <IoIosArrowDown className="king3"/>
        </div>
      </div>
    </div>
  );
}

export default Body;
