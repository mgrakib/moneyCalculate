/** @format */

document.getElementById("calculate-btn").addEventListener("click", function () {
	//    income
	const income = getValue("income-input-value", true);
	const validIncome = inputValidation(
		income,
		"income-input-value",
		"income requared and must be number"
	);

	// food
	const food = getValue("food-input-value", true);

	const validFood = inputValidation(
		food,
		"food-input-value",
		"food requared and must be number"
	);

	// rent
	const rent = getValue("rent-input-value", true);
	const validRent = inputValidation(
		rent,
		"rent-input-value",
		"rent requared and must be number"
	);

	// clothes
	const clothes = getValue("clothes-input-value", true);
	const validClothes = inputValidation(
		clothes,
		"clothes-input-value",
		"clothes requared and must be number"
	);

	if (
		typeof validClothes === "number" &&
		typeof validFood === "number" &&
		typeof validIncome === "number" &&
		typeof validRent === "number"
	) {
		const previoustotalExpence = document.getElementById("total-expenses");
		const previousBalance = document.getElementById("balance");

		const currenttotlaExpence = validClothes + validFood + validRent;

		const blance = validIncome - currenttotlaExpence;

		const errorshow = document
			.getElementById("calculate-btn")
			.parentElement.querySelector("small");
		if (blance < 0) {
			errorshow.classList.add("error-display");
			setTimeout(function () {
				errorshow.classList.remove("error-display");
			}, 3000);
			alert("Cut Your Coat Accordint to your cloth");
			previoustotalExpence.innerText = currenttotlaExpence;

			previousBalance.innerText = blance;
		} else {
			previoustotalExpence.innerText = currenttotlaExpence;

			previousBalance.innerText = blance;
		}
	}
});

document.getElementById("save").addEventListener('click', function () {
    const income = getValue("income-input-value", true);
    const validIncome = inputValidation(
        income,
        "income-input-value",
        "income requared and must be number"
    );
    const persenticeValue = parseInt(getValue("parcentige", true));
    

    const totalSaveMoney = (validIncome * persenticeValue) / 100;
    const previousBalance = parseFloat(
		document.getElementById("balance").innerText
	);
console.log(totalSaveMoney);
    const errowMessage = document
        .getElementById("errow-show");
        
    
    if (isNaN(totalSaveMoney)) {
		
        errowMessage.classList.add("error-display");
        errowMessage.innerText = "You cant pass any empty value..";
    
        
	} else if (previousBalance < totalSaveMoney) {
		errowMessage.classList.add("error-display");
		errowMessage.innerHTML = "You have no efficient blacne to save...";
	} else {
		errowMessage.classList.remove("error-display");
		
        document.getElementById("savingMoney").innerText = totalSaveMoney;

        document.getElementById("remainNingBalance").innerText = previousBalance - totalSaveMoney;
	}
    
});