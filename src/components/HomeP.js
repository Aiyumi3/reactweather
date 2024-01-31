import React, {useState} from 'react';
import 'uikit/dist/css/uikit.min.css';

const HomeP = () => {

    const [search, setSearch] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=65fadf9c874327f520bf18defed24255&units=metric`;

            const response = await fetch(url);
            const data = await response.json();

            const { main, name, sys, weather, coord, wind } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

            const weatherHtml = (
                <div className="card mb-4" style={{ borderRadius: '17px', margin: '15px' }}>
                    <div className="row no-gutters">
                        <div className="col-8 col-xl-7">
                            <div className="float-left">
                                <img src={icon} className="card-img" alt="weather" style={{ margin: '7px' }} />
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text"><span style={{ color: '#54315c', fontSize: '15pt', fontWeight: 400, paddingLeft: '10px', textAlign: 'center' }}>
                                {weather[0]["description"]}
                            </span>
                            </p>
                            <p className="card-text">
                                <span style={{ fontSize: '20pt', fontWeight: 700 }}>{Math.round(main.temp)}<sup style={{ backgroundColor: '#ffe4c4', borderRadius: '10px' }}>°C</sup></span><br />
                                min: {Math.round(main.temp_min)}<sup style={{ backgroundColor: 'bisque', borderRadius: '10px' }}>°C</sup>,
                                max: {Math.round(main.temp_max)}<sup style={{ backgroundColor: 'bisque', borderRadius: '10px' }}>°C</sup><br />
                                humidity 💧: {main.humidity} %<br />
                                wind speed: {wind["speed"]} m/s
                                <br />
                                <small className="text-muted">coords: {coord["lon"]}, {coord["lat"]}</small>
                            </p>
                            <h5 className="card-title">
                                {name}, <span style={{ backgroundColor: '#efd0f7', borderRadius: '11px' }}>{sys.country}</span>
                            </h5>
                        </div>
                    </div>
                </div>
            );
            setWeatherData(weatherHtml);

        } catch (error) {
            setErrorMessage("Enter a valid city!");
        }

        setErrorMessage("");
        setSearch('');
    };

    return (
        <>
            <nav
                style={{height: '90px', backgroundColor: 'thistle',
                    padding: '30px 70px 30px 70px', zIndex: 3, position: 'sticky', top: '-1em' }}>
                <form onSubmit={handleSearch}
                      className="uk-flex uk-flex-middle uk-margin-bottom">
                    <input className="uk-search-input uk-border-rounded" type="search" aria-label="Search"
                           value={search} onChange={(e) => setSearch(e.target.value)}
                           style={{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}} name="city"
                           id="inp-name" placeholder="enter city"/>

                    <button type="submit" id="search" className="uk-button uk-button-default uk-border-rounded">
                        search
                    </button>
                    {errorMessage && <span className="uk-text-danger" id="inp-name-notify">{errorMessage}</span>}

                </form>
            </nav>

            <section id="content"
                     style={{height: 'available', backgroundColor: 'seashell', margin: '15px', backgroundAttachment: 'initial'}}>

                <br/><br/>
                <div className="container" style={{backgroundPosition: 'inherit', position: 'relative'}}>
                    <div id="weather-container"
                         className="uk-child-width-1-2@s uk-child-width-1-4@md uk-child-width-1-2@lg uk-child-width-1-3@xl" uk-grid="true">
                        {weatherData}
                    </div>
                </div>
                <br/>

            </section>
        </>
    );
};
export default HomeP;