const Contacts = () => {
    return (
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Rostov-on-Don, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="link-to-tg:https://t.me/nuranna8106">@nuranna8106</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:anna_fukomova@bk.ru">anna_fukomova@bk.ru</a></p>
                    </li>
                </ul>
        </div>
    </main>
    );
}
 
export default Contacts;