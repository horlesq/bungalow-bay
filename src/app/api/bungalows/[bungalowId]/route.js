import { getBookedDatesByBungalowId, getBungalow } from "@/lib/data-service";

export async function GET(request, { params }) {
    const { bungalowId } = params;

    try {
        const [bungalow, bookedDates] = await Promise.all([
            getBungalow(bungalowId),
            getBookedDatesByBungalowId(bungalowId),
        ]);

        return Response.json({ bungalow, bookedDates });
    } catch {
        return Response.json({ message: "Bungalow not found" });
    }
}
