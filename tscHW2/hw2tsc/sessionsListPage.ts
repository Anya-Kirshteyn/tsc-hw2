
const visitsContainer = document.getElementById('visits-container') as HTMLDivElement;
const sessionsList111: Date[] = JSON.parse(localStorage.getItem('sessionsList') || '[]');

if (sessionsList111.length > 0) {
    sessionsList111.forEach((dateStr, index) => {
        const visitDate = new Date(dateStr);
        const visitElement = document.createElement('div');
        visitElement.className = 'visit-item';
        visitElement.textContent = `${index + 1}. ${visitDate.toLocaleString()}`;
        visitsContainer.appendChild(visitElement);
    });
} else {
    visitsContainer.textContent = 'No visits recorded yet.';
}