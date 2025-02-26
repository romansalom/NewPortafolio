import styles from './styles.module.css';
import Image from 'next/image';
import a from '../../images/hubspotLogo.png'
import b from '../../images/nextjsLogo.png'
import c from '../../images/nodeLogo.png'
import d from '../../images/reactLogo.png'




export default function Logos() {
    return (
        <div className={styles.container} >
            <Image src={a} className={styles.logo} width={'100%'} height={'100%'} alt='test' />
            <Image src={b} className={styles.logo2} width={'100%'} height={'100%'} alt='test' />
            <Image src={c} className={styles.logo2} width={'100%'} height={'100%'} alt='test' />
            <Image src={d} className={styles.logo2} width={'100%'} height={'100%'} alt='test' />



        </div>
    );
}
