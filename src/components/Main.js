import { useNavigate } from "react-router-dom";

function Main(){

let navigate = useNavigate()

    const greenStyle = {
        backgroundColor: 'green',
      };

      const redStyle = {
        backgroundColor: 'red',
      }

    return (
        <div className="main">
            <img src={'https://i.pinimg.com/564x/40/0a/f5/400af5e09f2ce1229a725f1119d6939b.jpg'}/>
            <p> Ты будешь моей валентинкой....?</p>
            <div className="main_btn">
                <button onClick={() => navigate('/cry')} style={greenStyle}>Да...</button>
                <button onClick={() => navigate('/whyno')} style={redStyle}>Нет...</button>
            </div>
        </div>
    )
}

export default Main