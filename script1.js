function toggleCalculator() {
    const calculator = document.getElementById('calculator');
    const backgroundImage = document.querySelector('.background-image');
    
    if (calculator.style.display === 'none' || calculator.style.display === '') {
        calculator.style.display = 'block';
        calculator.style.animation = 'slide-down 0.5s ease forwards';
        calculator.style.opacity = 1;
        backgroundImage.classList.add('blur');
    } else {
        calculator.style.animation = 'slide-up 0.5s ease forwards';
        calculator.style.opacity = 0;
        backgroundImage.classList.remove('blur');
        setTimeout(() => {
            calculator.style.display = 'none';
        }, 500); // Match this duration with the animation duration
    }
}


function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');

    if (!dob) {
        result.textContent = "Please enter your date of birth.";
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    const dayDiff = today.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    result.textContent = `You are ${age} years old.`;
}
