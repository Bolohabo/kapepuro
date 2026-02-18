export async function fetchData(file) {
    try {
        const response = await fetch(`data/${file}`);

        if (!response.ok) {
            console.error(`Failed to fetch ${file}: ${response.status} ${response.statusText}`);
            return []; // Return empty array if fetch fails
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${file}:`, error);
        return []; // Return empty array if error occurs
    }
}
