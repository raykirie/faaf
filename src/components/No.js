import { useNavigate } from "react-router-dom";

function No(){

    let navigate = useNavigate()

    const greenStyle = {
        backgroundColor: 'green',
      };

    return(
        <div className="no">
          <img src="https://i.pinimg.com/564x/0a/bb/2a/0abb2a1bfb8ec28f22775ed6af576da3.jpg"/>
          <p>Ты что меня не любишь....???</p>
          <div className="no_btn">
            <button onClick={() => navigate('/')} style={greenStyle}>Конечно люблю, я пошутила!</button>
            <button onClick={() => navigate('/')} style={greenStyle}>Я тебя очень люблю!</button>
          </div>
        </div>
    )
}

export default No