import queryString from 'query-string';

function Movie({ match, location }) {
    const query = queryString.parse(location.search);
    return (
        <div>
            {query.q} 샌즈
        </div>
    )
}

export default Movie;