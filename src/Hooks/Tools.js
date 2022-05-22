import { useEffect, useState } from "react";

const Tools = (i) => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [i]);
    return [tools, setTools];
};

export default Tools;