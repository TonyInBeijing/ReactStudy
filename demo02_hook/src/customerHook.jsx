import { useState, useEffect } from 'react';
function useChangeStatus(status) {
    const [result, setResult] = useState(false);
    useEffect(() => {
        setResult(status === 0 ? false : true);
    }, [status]);
    return result;
}
export default useChangeStatus;
