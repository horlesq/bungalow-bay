import { getCountries } from "@/lib/data-service";

async function SelectCountry({ defaultCountry, name, id, className }) {
    const countries = await getCountries();
    const flag =
        countries.find((country) => country.name === defaultCountry)?.flag ??
        "";

    return (
        <select
            name={name}
            id={id}
            defaultValue={`${defaultCountry}%${flag}`}
            key={defaultCountry}
            className="w-full px-4 py-3 bg-primary-900/50 border border-primary-700 rounded-lg text-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all duration-200 appearance-none cursor-pointer"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.75rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
            }}
        >
            <option value="" className="bg-primary-900 text-primary-400">
                Select your country...
            </option>
            {countries.map((c) => (
                <option
                    key={c.name}
                    value={`${c.name}%${c.flag}`}
                    className="bg-primary-900 text-primary-200"
                >
                    {c.name}
                </option>
            ))}
        </select>
    );
}

export default SelectCountry;
