import {useData} from "vike-react/useData";
import {Data} from "./+data";

const Page = () => {
    const data = useData<Data>()
    console.log(data)
    return (
        <h1>
            Главная страница сайта выставки
        </h1>
    );
};

export default Page;
