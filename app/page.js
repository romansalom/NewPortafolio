import Image from "next/image";
import NavBar from "@/components/Header/NavBar/navBar";
import styles from './styles.module.css';
import Header from "@/sections/Header/header";
import About from "@/sections/About/about";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header></Header>

      </div>
      <About></About>

    </div>
  );
}
