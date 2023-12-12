import Style from "./Profile.module.css"

export default function Profile({urlImage, name}) {

    return(
        <>
            <div><img className={Style.img} src={urlImage} alt="Perfil" /></div>
            <div className={Style.name}><h2>{name}</h2></div>
        </>
    )
    
}