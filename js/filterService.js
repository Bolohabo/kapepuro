export function filterByDistrict(data, district) {
    if (!district) return data;

    const normalizedDistrict = district.trim().toLowerCase();

    return data.filter(item => {
        if (!item.district) return false; // Safety check
        return item.district.trim().toLowerCase() === normalizedDistrict;
    });
}
