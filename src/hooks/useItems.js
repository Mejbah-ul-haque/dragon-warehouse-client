import { useEffect, useState } from "react"

const useItems = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://evening-dawn-30046.herokuapp.com//service')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return [items, setItems]
}

export default useItems;