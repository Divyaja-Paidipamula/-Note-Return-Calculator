function calculateChange() {
    const billAmount = parseInt(document.getElementById('billAmount').value);
    const cashGiven = parseInt(document.getElementById('cashGiven').value);
    
    if (!billAmount || billAmount <= 0) {
        alert("Please enter a valid bill amount greater than 0");
        return;
    }
    
    if (!cashGiven || cashGiven <= 0) {
        alert("Please enter a valid cash amount");
        return;
    }
    
    if (cashGiven < billAmount) {
        alert("Cash given should be greater than or equal to bill amount");
        return;
    }
    
    const change = cashGiven - billAmount;
    const denominations = [2000, 500, 100, 20, 10, 5, 1];
    const noteCount = [];
    let remainingAmount = change;
    
    for (let denomination of denominations) {
        const count = Math.floor(remainingAmount / denomination);
        noteCount.push(count);
        remainingAmount = remainingAmount % denomination;
    }
    
    // Update the grid
    const gridHeaders = document.querySelectorAll('.grid-header');
    for (let i = 1; i < gridHeaders.length; i++) {
        gridHeaders[i].textContent = noteCount[i-1];
    }
}