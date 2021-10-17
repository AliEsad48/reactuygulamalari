import "./clock1.css";
import moment from "moment";
import 'moment/locale/tr';

const Clock1 = () => {
    const dateTime = moment();
    const timeStr = dateTime.format( "HH:mm" )
    let dateStr = dateTime.format( "LL" )
    let dayStr = dateTime.format( "dddd" )
    const hour = dateTime.format( "HH" )
    let message = "";
    if ( hour > 6 && hour < 11 ) message = "Gündüz";
    else if ( hour >= 11 && hour < 17 ) message = "Öğlen";
    else if ( hour >= 17 && hour < 21 ) message = "Akşam"
    else message = "Gece";

    if ( dayStr = "PERŞEMBE" ) dayStr = "PERSEMBE";
    else if ( dayStr = "ÇARŞAMBA" ) dayStr = "CARSAMBA";

    if ( dateStr = "AĞUSTOS" ) dateStr = "AGUSTOS" + " " + dateTime.format( "Do" ) + ", " + dateTime.format( "YYYY" );
    else if ( dateStr = "ŞUBAT" ) dateStr = "SUBAT " + dateTime.format( "Do" ) + ", " + dateTime.format( "YYYY" );




    return (
        <div className="clock-container">
            <div className="clock">{timeStr}</div>
            <div>
                <div className="date">{dateStr}</div>
                <div className="day">{dayStr} {message}</div>
            </div>
        </div>
    );
};

export default Clock1;