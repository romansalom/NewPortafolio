import Hero from "@/components/Header/Hero/hero";
import ItalicsName from "@/components/Header/ItalicsName/italicsName";
import Logos from "@/components/Header/Logos/logos";
import NavBar from "@/components/Header/NavBar/navBar";
import styles from "./styles.module.css";


export default function Header() {
    return (
        <div className={styles.container}>
            <ItalicsName></ItalicsName>
            <Hero></Hero>


        </div>
    );
}
