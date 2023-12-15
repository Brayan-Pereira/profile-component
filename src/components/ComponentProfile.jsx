import Style from "./CompProf.module.css"
import Profile from "./profile/Profile.jsx"
import Description from "./descriptions/Descriptions.jsx"
import Button from "./btn_Socials/Socials.jsx"

export default function Card({
    urlImage, name, info1, info2, info3
}){
    return (
        <div className={Style.card}>
           <Profile 
           urlImage={urlImage}  name={name}
           />

            <Description informacao= {info1}/>
            <Description informacao= {info2}/>
            <Description informacao= {info3}/>

            <Button link= "GitHub"/>
            <Button link= "Linkedin"/>
            <Button link= "Twitter"/>

        </div>
    )
}