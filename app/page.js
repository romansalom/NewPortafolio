import Image from "next/image";
import NavBar from "@/components/Header/NavBar/navBar";
import styles from './styles.module.css';
import Header from "@/sections/Header/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>

    </div>
  );
}
