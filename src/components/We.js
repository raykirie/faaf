import { useNavigate } from "react-router-dom";

function We(){

    let navigate = useNavigate()

    const greenStyle = {
        backgroundColor: 'green',
      };    

    return(
        <div className="we"> 
            <img src="https://i.pinimg.com/564x/f9/12/c6/f912c60793f8bc73f4648e5124689d35.jpg"/>
            <p>А это ведь мы...?</p>
            <button onClick={() => navigate('/valentine')} style={greenStyle}>Да, это мы же...!</button>
        </div>
    )
}

export default We