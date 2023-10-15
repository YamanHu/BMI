document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const heightValue = document.getElementById("heightValue");
    const weightValue = document.getElementById("weightValue");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");
    const bmiValue = document.getElementById("bmiValue");
    const bmiCategory = document.getElementById("bmiCategory");

    heightInput.addEventListener("input", function () {
        heightValue.textContent = `${heightInput.value} cm`;
    });

    weightInput.addEventListener("input", function () {
        weightValue.textContent = `${weightInput.value} kg`;
    });

    calculateButton.addEventListener("click", function () {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight)) {
            alert("Please enter valid height and weight.");
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        bmiValue.textContent = bmi.toFixed(2);

        let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 24.9) {
            category = "Normal Weight";
        } else if (bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        bmiCategory.textContent = `Category: ${category}`;
        resultDiv.style.display = "block";
    });
});
