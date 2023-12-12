import Style from "./CompProf.module.css"
import Profile from "./profile/Profile.jsx"
import Description from "./descriptions/Descriptions.jsx"
import Button from "./btn_Socials/Socials.jsx"

export default function Card(){
    return (
        <div className={Style.card}>
           <Profile 
           urlImage="https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg"
           name="Brayan Pereira da Silva"
           />

            <Description informacao= "Dev Fullstack in Javascript"/>
            <Description informacao= "+5541992624356"/>
            <Description informacao= "bp410794@gmail.com"/>

            <Button link= "GitHub"/>
            <Button link= "Linkedin"/>
            <Button link= "Twitter"/>

        </div>
    )
}