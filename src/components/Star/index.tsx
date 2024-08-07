import { FaStar } from "react-icons/fa";
import './index.scss'
import { FaRegStar } from "react-icons/fa";
export interface Props{
    rating:number
}


export default function Star(props:Props){
    const NumStars =Math.round(props.rating/2);

    const fullStars=[];
    const emptyStars= [];

    for(let i = 0; i< 5; i++){
        if(i<NumStars){
            fullStars.push(i);
        }else{
            emptyStars.push(i);
        }
    }

return(
    <div className="movie-rate">
        {fullStars.map(index=>
            <FaStar key={index}/> 
        )}
        {emptyStars.map(index=>
            <FaRegStar key={index}/> 
        )}
        
    </div>
);
}

