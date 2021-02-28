import { Input, Button } from 'semantic-ui-react';

function Home() {
    return (
        <div style={{textAlign: 'center', marginTop: '10vh'}}>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
                    .Movie_Search {
                        font-family: 'Do Hyeon', sans-serif;
                        font-size: 30px;
                    }
                `}
            </style>
            <h1 className='Movie_Search'>영화 검색</h1>
            <Input placeholder='Search...' size='massive' id='Search' />
            <Button onClick={(() => {
                const value = document.getElementById('Search').value;
                window.location.replace(`/Movie?q=${value}`)
            })}>검색</Button>
        </div>
    )
}

export default Home;