// import type {ReactNode} from "react";

type CardProps = {
    title: string
    children: React.ReactNode  // children: ReactNode
}



const Card : () = ({title, children}:CardProps) : Element => {
    return (

        <>
         <div className="card">
         <h2>{title}</h2>
             {children}
         </div>




        </>
    )
}

export default Card;