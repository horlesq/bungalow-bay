// import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "./LoginMessage";

import { getBookedDatesByBungalowId, getSettings } from "@/lib/data-service";
import { auth } from "@/lib/auth";
import DateSelector from "./DateSelector";

async function Reservation({ bungalow }) {
    const [settings, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByBungalowId(bungalow.id),
    ]);
    const session = await auth();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-primary-800 rounded-xl overflow-hidden shadow-xl bg-primary-950 min-h-[400px] lg:min-h-[500px]">
            <DateSelector
                settings={settings}
                bookedDates={bookedDates}
                bungalow={bungalow}
            />
            {session?.user ? (
                <ReservationForm bungalow={bungalow} user={session.user} />
            ) : (
                <ReservationForm bungalow={bungalow} user={"Adrian"} />
                // <LoginMessage />
            )}
        </div>
    );
}

export default Reservation;
