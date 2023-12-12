import Style from "./Socials.module.css"

export default function Btn({ link }) {
    return (
        <button className={Style.btn}>
            {link}
        </button>
    )
}