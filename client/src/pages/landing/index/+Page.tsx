import {Link} from "../../../components/Link";

const Page = () => {
    return (
        <article>
            <h1>ExpoBuilder</h1>
            <h2>Создай сайт своими руками</h2>
            <p>Создай сайт за 3 шага</p>
            <ol>
                <li>
                    <p>Зарегестрируйся</p>
                </li>
                <li>
                    <p>Выбери дизайн</p>
                </li>
                <li>
                    <p>Заполни контент</p>
                </li>
            </ol>
            <p><Link href='/admin/register'>Регистрация</Link></p>
            <p><Link href='/admin/login'>Вход</Link></p>
        </article>
    );
};

export default Page;
