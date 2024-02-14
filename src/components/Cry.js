import { useNavigate } from "react-router-dom";

function Cry(){


    let navigate = useNavigate()

    const greenStyle = {
        backgroundColor: 'green',
      };

    return (
        <div className="cry">
            <img src="https://i.pinimg.com/564x/9d/70/b8/9d70b860a93cc01702926970874cdcf2.jpg"/>
            <p>Это ты когда расстроена....? </p>
            <button onClick={() => navigate('/eat')} style={greenStyle}>Ну да я....</button>
        </div>
    )
}

export default Cry