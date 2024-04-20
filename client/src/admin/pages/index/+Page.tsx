import Button from "../../../components/Button/Button";
import {Link} from "../../../components/Link";

const Page = () => {
    return (
        <form className="flex flex-col gap-3">
            <h1 className="text-2xl">ExpoBuilder</h1>
            <h2 className="text-xl">Авторизация</h2>
            <input required={true} type="text" placeholder="E-mail" />
            <input required={true} type="password" placeholder="Пароль" />
            <Button>Войти</Button>
            <p>Нет аккаунта? <Link href={"/admin/register"}>Регистрация</Link></p>
        </form>
    );
};

export default Page;
