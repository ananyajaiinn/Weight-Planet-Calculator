import React,{useState} from 'react';
import "./Body.css";
function TextForm(props) {

    const [text, setText] = useState('');
    const [ans, setAns] = useState('On this planet you weigh');

    const WeightMercury = ()=>{
        let newText = (text/9.81) * 3.7;
        setText(newText);
        setAns(newText.toFixed(2));
        if(text==''){
            alert("Enter your weight");
        };
        return 0;
    }

    const WeightVenus = ()=>{
        let newText = (text/9.81) * 8.87;
        setText(newText);
        setAns(newText.toFixed(2));
        if(text==''){
            alert("Enter your weight");
        }
    }

    const WeightMars = ()=>{
        let newText = (text/9.81) * 3.712;
        setText(newText);
        setAns(newText.toFixed(2));
        if(text==''){
            alert("Enter your weight");
        }
    }

    const WeightJupiter = ()=>{
        let newText = (text/9.81) * 24.79;
        setText(newText);
        setAns(newText.toFixed(2));
        if(text==''){
            alert("Enter your weight");
        }
    }
    const WeightSaturn = ()=>{
        let newText = (text/9.81) * 10.44;
        setText(newText);
        setAns(newText.toFixed(2));
        if(text==''){
            alert("Enter your weight");
        }
    }
    const WeightUranus = ()=>{
        let newText = (text/9.81) * 8.87;
        setText(newText);
        setAns(newText.toFixed(2));
        if(text==''){
            alert("Enter your weight");
        }
    }
    const WeightNeptune = ()=>{
        let newText = (text/9.81) * 11.15;
        setText(newText);
        setAns(newText.toFixed(2));
        if(text==''){
            alert("Enter your weight");
        }
    }


    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    
    
  return (
    <>
    <div className='container'>
        <div className="row g-3">
                <div className="col-sm">
                    <input type="text" className="form-control" placeholder="On Earth you weigh" aria-label="On Earth you weigh" onChange={handleOnChange} />
                </div>
                <div className="col-sm ans">
                    <p>{ans}</p>
                </div>
    </div>
    </div>

    
    <div className='parent'>
    <div className='Planet-images my-4'>
        <button className="btn" onClick={WeightMercury}>
        <img src='https://www.schoolsobservatory.org/sites/default/files/astro/agemass/mercury-nasa.png' alt = "mercury" width="50" height="50" border="0"></img>
        </button>
        <p>Mercury</p>
        </div>
        

    <div className='Planet-images my-4'>
        <button className='btn' onClick={WeightVenus}>
        <img src='https://www.schoolsobservatory.org/sites/default/files/astro/agemass/venus-nasa.png' alt = "venus" width="50" height="50" border="0"></img>
        </button>
        <p>Venus</p>
        </div>

    <div className='Planet-images my-4'>
        <button className="btn" onClick={WeightMars}>
        <img src='https://www.schoolsobservatory.org/sites/default/files/astro/agemass/mars-nasa.png' alt = "mars" width="50" height="50" border="0"></img>
        </button>
        <p>Mars</p>
        </div>

    <div className='Planet-images my-4'>
        <button className="btn" onClick={WeightJupiter}>
        <img src='https://www.schoolsobservatory.org/sites/default/files/astro/agemass/jupiter-nasa.png' alt = "jupiter" width="50" height="50" border="0"></img>
        </button>
        <p>Jupiter</p>
        </div>

    <div className='Planet-images my-4'>
        <button className="btn" onClick={WeightSaturn}>
        <img src='https://www.schoolsobservatory.org/sites/default/files/astro/agemass/saturn-nasa.png' alt = "saturn" width="50" height="50" border="0"></img>
        </button>
        <p>saturn</p>
        </div>

    <div className='Planet-images my-4'>
        <button className="btn" onClick={WeightUranus}>
        <img src='https://www.schoolsobservatory.org/sites/default/files/astro/agemass/uranus-nasa.png' alt = "uranus" width="50" height="50" border="0"></img>
        </button>
        <p>Uranus</p>
        </div>

    <div className='Planet-images my-4'>
        <button className="btn" onClick={WeightNeptune}>
        <img src='https://www.schoolsobservatory.org/sites/default/files/astro/agemass/neptune-nasa.png' alt = "neptune" width="50" height="50" border="0"></img>
        </button>
        <p>neptune</p>
        </div>
        

    </div>



        
    </>
  )
}
export default TextForm;