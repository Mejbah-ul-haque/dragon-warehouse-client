import { useEffect, useState } from "react"

const useItemDetails = id => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const url = `http://localhost:4000/service/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);
    return [item, setItem]
}

export default useItemDetails;