import styles from './styles.module.css';

export default function NavBar() {

  const sectionObject = {

    2: {
      title: 'Services',
      path: '/',
    },
    3: {
      title: 'Proyects',
      path: '/',
    },
    4: {
      title: 'Expirience',
      path: '/',
    },
  }

  return (
    <div className={styles.container}>

      <ul className={styles.sections}>
        {Object.keys(sectionObject).map(key => (
          <li key={key}>
            <a>{sectionObject[key].title}</a>
          </li>
        ))}

      </ul>
    </div>
  );
}
