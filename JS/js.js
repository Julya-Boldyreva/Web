let productsCommon = [];

function doYouReallyWant(){
	return confirm('Are you shure? \nAre you want to perform this action?');
}

/* table initial values */	
function initiolizeTable(){
	let products = [
		{ name: "Good 1", count: Math.round(Math.random() * (100 - 1) + 1), price: Math.round(Math.random() * (10000 - 10) + 10) },
		{ name: "Good 2", count: Math.round(Math.random() * (100 - 1) + 1), price: Math.round(Math.random() * (10000 - 10) + 10) },
		{ name: "Good 3", count: Math.round(Math.random() * (100 - 1) + 1), price: Math.round(Math.random() * (10000 - 10) + 10) }
	];

	let tbody = document.getElementById('tableProduct').getElementsByTagName("tbody")[0];

	for(let i = 0; i < 3; i++){
		let row = document.createElement("tr");

		//td 1
		let td1 = document.createElement("td");
		let prod = products[i].name;
		td1.appendChild(document.createTextNode(prod));
		// td 2
		let td2 = document.createElement("td");
		let count = products[i].count;
		td2.appendChild (document.createTextNode(count));
		//td 3
		let td3 = document.createElement("td");
		let cost = products[i].price;
		td3.appendChild(document.createTextNode(cost));	
		//td 4
  		let td4 = document.createElement("td");
  		td4.appendChild(document.createTextNode(""));	
		//td 5
		let td5 = document.createElement("td");
		
		// edit button
		let btn1 = document.createElement('input');
		btn1.type = 'button';
		btn1.value = 'Edit';
		btn1.setAttribute('onclick', 'edit(this)');
		// delete button
		let btn2 = document.createElement('input');
		btn2.type = 'button';
		btn2.value = 'Delete';
		btn2.setAttribute('onclick', "if(doYouReallyWant()){ell = this.closest('tr'); ell.parentElement.removeChild(ell);}");
		
		td5.appendChild(btn1);
		td5.appendChild(btn2);
		//////////

		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
		row.appendChild(td4);
   		row.appendChild(td5);

		tbody.appendChild(row);
	}

	productsCommon = products;
}

/* add new row */
 function addRow()
{
    // read form values
    let nameProduct = document.getElementById('nameProduct').value;
    let count = document.getElementById('count').value;
    let price = document.getElementById('price').value;

    // add to array
	productsCommon.push({ name: nameProduct, count: count, price: price });

    // find and save table into let
    let tbody = document.getElementById('tableProduct').getElementsByTagName('tbody')[0];

    // create and append table row
    let row = document.createElement("tr");
    tbody.appendChild(row);

    // create and append td-s
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
	let td5 = document.createElement("td");
	// edit button
	let btn1 = document.createElement('input');
	btn1.type = 'button';
	btn1.value = 'Edit';
	btn1.setAttribute('onclick', 'edit(this)');
	// delete button
	let btn2 = document.createElement('input');
	btn2.type = 'button';
	btn2.value = 'Delete';
	btn2.setAttribute('onclick', "if(doYouReallyWant()){ell = this.closest('tr'); ell.parentElement.removeChild(ell);}");

	td1.appendChild(document.createTextNode(nameProduct));	
	td2.appendChild(document.createTextNode(count));	
	td3.appendChild(document.createTextNode(price));	
	td4.appendChild(document.createTextNode(""));	
	td5.appendChild(btn1);
	td5.appendChild(btn2);

    row.appendChild(td1);
    row.appendChild(td2);    
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

	tbody.appendChild(row);

	document.getElementById('nameProduct').value = "";
	document.getElementById('count').value = "";
	document.getElementById('price').value = "";
}

/* validation (if all is true - append new row */
function validationValue() {
	document.getElementById('nameProductLabel').innerText = "";
	document.getElementById('countLabel').innerText = "";
	document.getElementById('priceLabel').innerText = "";
	
    let vald_Name = validationName();
    let valid_Count = validationCount();
    let valid_Price = validationPrice();
		
    if (vald_Name && valid_Count && valid_Price)
	{
		document.getElementById('nameProductLabel').innerText = "";
		document.getElementById('countLabel').innerText = "";
		document.getElementById('priceLabel').innerText = "";
		addRow();
	}
}
/* validation of name */
function validationName() {
    let strName = document.getElementById('nameProduct').value;
	let el = document.getElementById('nameProductLabel');
	
    if (strName.length <= 0) {
        el.innerText = 'Поле не должно быть пустым!';
        document.getElementById('nameFrame').classList = "redBorder";
        return false;
    }
    else if (strName.length > 15) {
        el.innerText = 'Максимальная длина 15 символов';
        document.getElementById('nameFrame').classList = "redBorder";
        return false;
    }
	else {
		let count = 0;
		for(let i = 0; i < strName.length; i++){
			if(strName[i] == ' ')
			{
				count++;
			}
		}
		if(count == strName.length)	{
			el.innerText = 'Поле не должно состоять из одних пробелов!';
			document.getElementById('nameFrame').classList = "redBorder";
			return false;
		}
		else
		{
			document.getElementById('nameFrame').classList = "greenBorder";
			return true;
		}
	}
	
	document.getElementById('nameFrame').classList = "greenBorder";
	return true;
}
/* validation of count */
function validationCount() {
    let strCount = document.getElementById('count').value;
	let el = document.getElementById('countLabel');
	
	if(strCount.includes('e') || strCount == "" || strCount == " "){
		el.innerText = 'Поле должно быть числом!';
		document.getElementById('countFrame').classList = "redBorder";
        return false;
	}
	else{
		document.getElementById('countFrame').classList = "greenBorder";
		return true;
	}

	document.getElementById('countFrame').classList = "greenBorder";
	return true;
}
/* validation of price */
function validationPrice() {
    let strPrice = document.getElementById('price').value;
	let el = document.getElementById('priceLabel');
	
	if(strPrice.includes('e') || strPrice == "" || strPrice == " "){
		el.innerText = 'Поле должно быть числом!';
		document.getElementById('priceFrame').classList = "redBorder";
        return false;
	}
	else{
		document.getElementById('priceFrame').classList = "greenBorder";
		return true;
	}

	document.getElementById('priceFrame').classList = "greenBorder";
	return true;
}

let str; //global var to save new row

/* edit the row */
function edit(btn){
	// get row
	let tr = btn.closest('tr');

	// get row value
	let valueName = tr.cells[0].textContent;
	let valueCount = tr.cells[1].textContent;
	let valuePrice = tr.cells[2].textContent;

	// set inputs value
	document.getElementById('nameProduct').value = valueName;
	document.getElementById('count').value = valueCount;
	document.getElementById('price').value = valuePrice;
	document.getElementById('addUpdateButton').value = "Update"; 

	str = btn;
	document.getElementById('addUpdateButton').setAttribute('onclick', "update(str);");
}

function update(btn) {
//	alert("Update!");
	tr = btn.closest('tr');
	//tr.style.backgroundColor = "yellow";
  
	let vald_Name = validationName();
    let valid_Count = validationCount();
    let valid_Price = validationPrice();
		
    if (vald_Name && valid_Count && valid_Price)
	{
		document.getElementById('nameProductLabel').innerText = "";
		document.getElementById('countLabel').innerText = "";
		document.getElementById('priceLabel').innerText = "";
		// get row value
		tr.cells[0].textContent = document.getElementById('nameProduct').value;
		tr.cells[1].textContent = document.getElementById('count').value;
		tr.cells[2].textContent = document.getElementById('price').value;

		// change button
		document.getElementById('nameProduct').value = "";
		document.getElementById('count').value = ""; 
		document.getElementById('price').value = "";
		document.getElementById('addUpdateButton').value = "Add"; 
		document.getElementById('addUpdateButton').setAttribute('onclick', "validationValue();");
	}
}


function addNew(){
	document.getElementById('nameProduct').value = "";
	document.getElementById('count').value = ""; 
	document.getElementById('price').value = "";
	document.getElementById('addUpdateButton').value = "Add";

	document.getElementById('nameProductLabel').innerText = "";
	document.getElementById('countLabel').innerText = "";
	document.getElementById('priceLabel').innerText = "";

	document.getElementById('addUpdateButton').setAttribute('onclick', "validationValue();");
}


/* filter search */
function tableSearch() {
    let phrase = document.getElementById('fltString');
    let table = document.getElementById('tableProduct');
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;

    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) {
            	break;
            }
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
    }
}

/* compare elements for sort */
function compare(a, b){
  let comparison = 0;

  if (a > b) {
    comparison = 1;
  } else if (b > a) {
    comparison = -1;
  }

  return comparison;
}

let sortNameFlag = true;
let sortPriceFlag = true;

/* Sort */
function sortName(){
	let tbody = document.getElementById('tableProduct').getElementsByTagName("tbody")[0];
	
	// delete old table
	while(tbody.firstChild){
		tbody.removeChild(tbody.firstChild);
	}

	//sort
	if(sortNameFlag)
	{
		sortNameFlag = !sortNameFlag;
		document.getElementById("nameSort").setAttribute("src", "./images/triangleDown.png");
		productsCommon.sort((prev, next) => {
		    if ( prev.name >= next.name ) return -1;
		    if ( prev.name <= next.name ) return 1;
		});
		
	}
	else{
		sortNameFlag = !sortNameFlag;
		document.getElementById("nameSort").setAttribute("src", "./images/triangleUp.png")
		productsCommon.sort((prev, next) => {
		    if ( prev.name <= next.name ) return -1;
		    if ( prev.name >= next.name ) return 1;
		});
	}

	// create new table
	for(let i = 0; i < productsCommon.length; i++){
		let row = document.createElement("tr");

		//td 1
		let td1 = document.createElement("td");
		let prod = productsCommon[i].name;
		td1.appendChild(document.createTextNode(prod));
		// td 2
		let td2 = document.createElement("td");
		let count = productsCommon[i].count;
		td2.appendChild (document.createTextNode(count));
		//td 3
		let td3 = document.createElement("td");
		let cost = productsCommon[i].price;
		td3.appendChild(document.createTextNode(cost));	
		//td 4
  		let td4 = document.createElement("td");
  		td4.appendChild(document.createTextNode(""));	
		//td 5
		let td5 = document.createElement("td");
		
		// edit button
		let btn1 = document.createElement('input');
		btn1.type = 'button';
		btn1.value = 'Edit';
		btn1.setAttribute('onclick', 'edit(this)');
		// delete button
		let btn2 = document.createElement('input');
		btn2.type = 'button';
		btn2.value = 'Delete';
		btn2.setAttribute('onclick', "if(doYouReallyWant()){ell = this.closest('tr'); ell.parentElement.removeChild(ell);}");
		
		td5.appendChild(btn1);
		td5.appendChild(btn2);
		//////////

		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
		row.appendChild(td4);
   		row.appendChild(td5);

		tbody.appendChild(row);
	}
}

function sortPrice(){
	let tbody = document.getElementById('tableProduct').getElementsByTagName("tbody")[0];
	
	// delete old table
	while(tbody.firstChild){
		tbody.removeChild(tbody.firstChild);
	}

	//sort
	if(sortPriceFlag)
	{
		sortPriceFlag = !sortPriceFlag;
		document.getElementById("priceSort").setAttribute("src", "./images/triangleDown.png");
		productsCommon.sort((prev, next) => {
		    if ( prev.price >= next.price ) return -1;
		    if ( prev.price <= next.price ) return 1;
		});
		
	}
	else{
		sortPriceFlag = !sortPriceFlag;
		document.getElementById("priceSort").setAttribute("src", "./images/triangleUp.png")
		productsCommon.sort((prev, next) => {
		    if ( prev.price <= next.price ) return -1;
		    if ( prev.price >= next.price ) return 1;
		});
	}

	// create new table
	for(let i = 0; i < productsCommon.length; i++){
		let row = document.createElement("tr");

		//td 1
		let td1 = document.createElement("td");
		let prod = productsCommon[i].name;
		td1.appendChild(document.createTextNode(prod));
		// td 2
		let td2 = document.createElement("td");
		let count = productsCommon[i].count;
		td2.appendChild (document.createTextNode(count));
		//td 3
		let td3 = document.createElement("td");
		let cost = productsCommon[i].price;
		td3.appendChild(document.createTextNode(cost));	
		//td 4
  		let td4 = document.createElement("td");
  		td4.appendChild(document.createTextNode(""));	
		//td 5
		let td5 = document.createElement("td");
		
		// edit button
		let btn1 = document.createElement('input');
		btn1.type = 'button';
		btn1.value = 'Edit';
		btn1.setAttribute('onclick', 'edit(this)');
		// delete button
		let btn2 = document.createElement('input');
		btn2.type = 'button';
		btn2.value = 'Delete';
		btn2.setAttribute('onclick', "if(doYouReallyWant()){ell = this.closest('tr'); ell.parentElement.removeChild(ell);}");
		
		td5.appendChild(btn1);
		td5.appendChild(btn2);
		//////////

		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
		row.appendChild(td4);
   		row.appendChild(td5);

		tbody.appendChild(row);
	}

}