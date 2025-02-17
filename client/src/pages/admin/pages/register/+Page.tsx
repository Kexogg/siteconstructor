import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { Link } from "../../../../components/Link";
import { useState } from "react";
import { userRegister } from "../../../../api/user";

const Page = () => {
  const [error, setError] = useState<string | null>(null);

  interface Inputs {
    login: string;
    siteAddress: string;
    siteName: string;
    companyName: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await userRegister(
      data.login,
      data.password,
      data.companyName,
      data.siteName,
      data.siteAddress,
    );

    if (response.id) {
      window.location.reload();
    } else {
      setError("Ошибка регистрации");
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold text-center">ExpoBuilder</h1>
      <h2 className="text-xl text-center">Регистрация</h2>
      <Input
        {...register("login")}
        placeholder="E-mail"
        required
        type="email"
      />
      <Input
        {...register("companyName")}
        placeholder="Название компании"
        required
        type="text"
      />
      <Input
        {...register("siteName")}
        placeholder="Название сайта"
        required
        type="text"
      />
      <Input
        {...register("siteAddress")}
        placeholder="Адрес сайта"
        required
        type="text"
      />
      <Input
        {...register("password")}
        placeholder="Пароль"
        required
        type="password"
      />
      <Button>Зарегистрироваться</Button>
      <p className="text-center">
        Есть аккаунт?{" "}
        <Link href={"/admin/login"}>
          <span className="text-blue-500 underline">Войти</span>
        </Link>
      </p>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
};

export default Page;
