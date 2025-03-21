import styles from "./scss/MainPage.module.scss";
import classNames from "classnames";

function App() {
    return (
        <>
            <header className={styles["header"]}>
                <div className={classNames(styles["header__container"], "_container")}>
                    <h1 className={styles["header__name"]}>Сладкий сундук</h1>
                    <div className={styles["location"]}>
                        <div className={styles["loctaion__marker"]}>
                            <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.0788 7.23113C14.0183 7.00434 13.8954 6.76268 13.8045 6.55111C12.7167 3.93689 10.3399 3 8.42078 3C5.85165 3 3.02206 4.72271 2.64429 8.27362V8.99909C2.64429 9.02937 2.65472 9.30134 2.66954 9.43738C2.88131 11.1297 4.21665 12.9282 5.21393 14.6205C6.28686 16.4336 7.40018 18.2171 8.50319 20C9.18332 18.8365 9.86101 17.6578 10.5257 16.5245C10.7068 16.1919 10.9171 15.8595 11.0984 15.542C11.2193 15.3306 11.4502 15.1192 11.5557 14.9226C12.6285 12.9583 14.3555 10.9788 14.3555 9.02933V8.22849C14.3555 8.01715 14.0936 7.2767 14.0788 7.23113ZM8.46781 10.873C7.71262 10.873 6.88601 10.4954 6.478 9.45252C6.41721 9.28651 6.42211 8.95384 6.42211 8.92336V8.45492C6.42211 7.12548 7.55093 6.52091 8.53295 6.52091C9.74192 6.52091 10.677 7.48815 10.677 8.69713C10.677 9.90606 9.67678 10.873 8.46781 10.873Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className={styles["location__street"]}>
                            <a href="">г. Санкт Петербург, ул. Куйбышева 31</a>
                        </div>
                    </div>
                    <div className={styles["contact"]}>
                        <div className={styles["contant__icon"]}></div>
                        <div className={styles["contant__containet"]}>
                            <div className={styles["contact__number"]}>
                                <h1>8 (812) 844-95-49</h1>
                            </div>
                            <div className={styles["contant__work-time"]}>
                                <p>Ежедневно с 9:00 до 20:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default App;
