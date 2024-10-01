import { useEffect, useState } from "react";

function useMoneyconvertInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Fetch currency data
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );
                const result = await response.json();
                setData(result[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyData();
    }, [currency]); // Dependency to refetch if the currency changes

    return data;
}

export default useMoneyconvertInfo;
