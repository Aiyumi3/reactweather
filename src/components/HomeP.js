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
                <div className="uk-card uk-card-default uk-card-body uk-card-hover uk-margin"
                     style={{ padding: '25px', borderRadius: '17px', margin: '15px', backgroundColor: 'rgba(216, 191, 216, 0.74)' }}>
                    <div className="uk-grid-collapse uk-child-width-expand@s" uk-grid="true">
                        <div className="uk-width-1-2@s">
                            <div className="uk-text-center">
                                <img src={icon} className="uk-border-circle uk-box-shadow-large" alt="weather"
                                     width="100"
                                     style={{margin: '7px', transform: 'scale(2.5) translateX(-23px)'}}/> <br/><br/><br/>
                                <hr/>
                                <h2 className="uk-text-large uk-text-primary">
                                    <span style={{
                                        color: '#54315c',
                                        fontSize: '15pt',
                                        fontWeight: 'bold', letterSpacing: '2px',
                                        padding: '11px'
                                    }}> <b><i>{weather[0]["description"]}</i></b></span>
                                </h2>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s">
                            <h2 className="uk-text-bold uk-margin-remove">
                                <i><span style={{fontSize: '20pt', fontWeight: 700}}>{Math.round(main.temp)}<sup
                                    style={{backgroundColor: '#ffe4c4', borderRadius: '10px'}}>°C</sup></span></i><br/>
                            </h2><p className="uk-margin-remove">
                        min: {Math.round(main.temp_min)}<sup
                            style={{backgroundColor: 'bisque', borderRadius: '10px'}}>°C</sup>,
                            max: {Math.round(main.temp_max)}<sup
                            style={{backgroundColor: 'bisque', borderRadius: '10px'}}>°C</sup><br/>
                        </p><p className="uk-margin-remove">
                            humidity 💧: {main.humidity} %<br/></p><p className="uk-margin-remove">
                            wind speed: {wind["speed"]} m/s</p>
                            <br/>
                            <small className="uk-text-muted">coords: {coord["lon"]}, {coord["lat"]}</small>

                            <h5 className="uk-margin-remove">
                                {name}, <span className="uk-background-muted uk-border-rounded"
                                style={{backgroundColor: '#efd0f7', borderRadius: '11px'}}>{sys.country}</span>
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
                     style={{height: 'available', backgroundColor: 'rgba(255, 245, 238, 0.61)', margin: '15px',
                         backgroundAttachment: 'initial', borderRadius: '25px', borderColor: 'peachpuff'}}>
                <br/><br/>
                <div className="uk-container" style={{backgroundPosition: 'inherit', position: 'relative'}}>
                    <div id="weather-container"
                         className="uk-flex uk-flex-center">
                        {weatherData}
                    </div>
                </div>
                <br/>

            </section>
        </>
    );
};
export default HomeP;