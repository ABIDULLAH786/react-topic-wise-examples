import { useLocation } from 'react-router-dom';

function useLastSegment() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    let currentpage = pathSegments[pathSegments.length - 1]
    return currentpage
}

export default useLastSegment