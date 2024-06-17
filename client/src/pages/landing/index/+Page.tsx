const Page = () => {
    return (
        <>
            <div className={'h-12 bg-user-primary'} />
            <section className={'h-14 w-screen fixed top-0 bg-user-primary opacity-50'} />
            <section className={'h-14 items-center w-screen fixed text-white font-light border-b top-0 p-3 flex justify-end backdrop-blur text-lg'}>
            <nav>
                <ul className={'flex drop-shadow'}>
                    <li className={'mr-5'}>
                        <a href={'/'}>Главная</a>
                    </li>
                    <li className={'mr-5'}>
                        <a href={'/'}>О нас</a>
                    </li>
                    <li className={'mr-5 outline rounded-full px-3 outline-1'}>
                        <a href={'/admin/login'}>Войти</a>
                    </li>
                </ul>
            </nav>
            </section>
            <section className={'bg-user-primary text-white flex h-[75vh] px-10 pb-0 font-light'}>
                <div className={'border border-t-0 w-2/3 p-3'}>
                    <h1 className={'text-5xl uppercase'}>Конструктор сайта выставочного мероприятия</h1>
                    <h2 className={'text-xl uppercase mt-20'}>Создай сайт своими руками</h2>
                </div>
                <a className={'mt-auto bg-white text-user-primary block h-min py-3 px-8 text-xl ml-auto mb-32 hover:bg-gray-100 uppercase'}
                   href={'/admin/register'}>Создать сайт</a>
            </section>
            <section className={'container mx-auto text-user-primary font-light px-5 py-20'}>
                <h2 className={'text-5xl text-center'}>Создай сайт за 3 шага</h2>
                <ol className={'steps__list'}>
                    <li className={'steps__container'}>
                        <span className={'steps__number'}>1</span>
                        <div>
                            <h3 className={'text-3xl'}>Зарегестрируйтесь</h3>
                            <p>Придумайте название, адрес сайта и добавьте разделы и страницы </p>
                        </div>
                    </li>
                    <li className={'steps__container sm:flex-row-reverse sm:text-right'}>
                        <span className={'steps__number'}>2</span>
                        <div>
                            <h3 className={'text-3xl'}>Выберите оформление</h3>
                            <p>Выберите цвета, шрифты и прочие элементы оформления</p>
                        </div>
                    </li>
                    <li className={'steps__container'}>
                        <span className={'steps__number'}>3</span>
                        <div>
                            <h3 className={'text-3xl'}>Добавьте контент</h3>
                            <p>Заполните страницы блоками</p>
                        </div>
                    </li>
                </ol>
            </section>
            <section className={'container mx-auto text-user-primary font-light px-5 py-20'}>
                <h2 className={'text-3xl'}>Сайт выставки</h2>
                <p>Создание посадочных страниц и измерение их эффективности. Мы разработали ряд блоков для создания
                    лендингов, среди которых — отзывы, блоки call-to-action, перечисление преимуществ, кнопки и многое
                    другое.</p>
            </section>
        </>
    );
};

export default Page;
