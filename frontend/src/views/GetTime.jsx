import { DateTime } from "luxon";

const GetTime = () => {
    const easternTime = DateTime.local().setZone("America/New_York");
    return easternTime.toLocaleString(DateTime.DATETIME_FULL);
};

export default GetTime;