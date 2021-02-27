import { Input } from 'semantic-ui-react';

function Home() {
    return (
        <div style={{textAlign: 'center', marginTop: '10vh'}}>
            <h1>영화 검색</h1>
            <Input icon='search' placeholder='Search...' size='massive' />
        </div>
    )
}

export default Home;