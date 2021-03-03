import {useState, useEffect} from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        fetch(url).then(function(res) {
            if (!res.ok) throw Error("Couldn't fetch the data");
            return res.json();
        }).then(function(data) {
            setData(data);
            setIsPending(false);
        }).catch(function(err) {
            setError(err.message);
            setIsPending(false);
        });
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;