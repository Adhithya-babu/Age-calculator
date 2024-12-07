document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    if (birthdate > today) {
        document.getElementById('result').textContent = "Invalid birthdate!";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
});
