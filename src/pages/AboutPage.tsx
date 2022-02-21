import React from 'react';
import {useNavigate} from "react-router-dom";

export const AboutPage:React.FC = () => {
    const navigate = useNavigate()
    function handelClick(){
        navigate('/Todo')
    }
    return (
        <div>
            <h1>Страница информации</h1>
            <button className="btn"onClick={handelClick}>Обратно к списку дел</button>
        </div>
    );
};

