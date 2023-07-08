(() => {
    /// Only these days will be treated.
    /// 0 = Sunday, 1 = Monday, ..., Friday = 5, Saturday = 6
    const DAYS_TO_FILL = [1, 3];
    
    const rows =  Array.from(document.querySelectorAll('.hours-report tr'));
    
    // first row is the table header
    for(let i = 1; i< rows.length; i++) {
        // Find the day this row represents
        const dateStr = rows[i].querySelector('.dateText').innerText
        const dateArr = dateStr.split(' ')[0].split('/')
        const day = new Date(dateArr[2], parseInt(dateArr[1]) - 1, dateArr[0]).getDay()
        
        // Fill if we're in a day to fill
        if (DAYS_TO_FILL.includes(day)) {
            rows[i].querySelector('.checkIn input').value = '9:30'
            rows[i].querySelector('.checkOut input').value = '18:00';
        }
    } 
})();
