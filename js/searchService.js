export function searchData(data, keyword) {
    if (!keyword) return data;

    const normalizedKeyword = keyword.trim().toLowerCase();

    return data.filter(item => {
        if (!item.name) return false; // safety check
        const name = item.name.toLowerCase();
        const description = item.description ? item.description.toLowerCase() : '';
        const type = item.type ? item.type.toLowerCase() : '';
        const specialty = item.specialty ? item.specialty.toLowerCase() : '';

        return (
            name.includes(normalizedKeyword) ||
            description.includes(normalizedKeyword) ||
            type.includes(normalizedKeyword) ||
            specialty.includes(normalizedKeyword)
        );
    });
}
