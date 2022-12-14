import { useEffect, useState } from "react"

const useItems = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://quiet-ravine-29448.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return [items, setItems]
}

export default useItems;