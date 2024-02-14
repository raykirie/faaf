import { useNavigate } from "react-router-dom";

function Eat(){

    let navigate = useNavigate()

    const greenStyle = {
        backgroundColor: 'green',
      };

    return(
        <div className="eat">
            <img src="https://i.pinimg.com/564x/0f/91/0d/0f910d4c8a865132baf0a59215eee830.jpg"/>
            <p>Это ты когда кушаешь...?</p>
            <button onClick={() => navigate('/typ')} style={greenStyle}>Ну да ващето</button>
        </div>
    )
}

export default Eat