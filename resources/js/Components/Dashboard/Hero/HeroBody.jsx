const URL = 'http://akmeninis.lt';

export default function HeroBody( { showBody } ) {



    const hero = axios.get('/hero').then((response) => {
        return response.data;
    });

    //Get hero data from  Hero model
    console.log(hero);

    return (
        <div className="p-6 text-gray-900" data-hero-container style={{ display: showBody ? 'block' : 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus veritatis totam nisi aliquam in!</div>
    );
}