import { useEffect, useState } from "react";

const useComplete = () => {
	const [completes, setCompletes] = useState([])
    const [isLoad, setIsLoad] = useState(true)
	useEffect(() => {
		fetch('http://localhost:5000/completes')
		.then((res) => res.json())
        .then((data) => setCompletes(
        data, setIsLoad(false)));
    }, [completes])

    return {completes, setCompletes, isLoad, setIsLoad}
};

export default useComplete;