export async function fetchData(file) {
    const response = await fetch(`data/${file}`);
    return await response.json();
}
