import Style from "./Descriptions.module.css"

export default function ({informacao}){
    return(
        <div className={Style.info}>
            <p>{informacao}</p>
        </div>
    )
}