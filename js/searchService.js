export function searchData(data, keyword) {
    if (!keyword) return data;
    return data.filter(item =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
    );
}
