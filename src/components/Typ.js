import { useNavigate } from "react-router-dom";

function Typ(){
    let navigate = useNavigate()

    const greenStyle = {
        backgroundColor: 'green',
      };

    return (
        <div className="typ">
            <img src="https://i.pinimg.com/736x/00/91/72/009172394771585062ede79a6884e2d5.jpg"/>
            <p>А это прямо ты когда злишься...</p>
            <button onClick={() => navigate('/we')} style={greenStyle}>Ну да, и чо!?!?</button>
        </div>
    )
}

export default Typ