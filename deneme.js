btnGet.addEventListener('click', (e) => {

    var CarID = document.getElementById('carID').value;
  
    const starCountRef = ref(database, 'Cars/' + CarID);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val(); // data = all data on firebsex 
        document.getElementById('carname').value = data.CarName;
        document.getElementById('category').value = data.category;
        document.getElementById('description').value = data.description;
        document.getElementById('carsurl').value = data.carsurl;
      
    });
    alert("Veriler Alındı");
  
  
  });



  btnUpdate.addEventListener('click', (e) => {
    var CarID = document.getElementById('carname').value;
    var CarName = document.getElementById('category').value;
    var CarModel = document.getElementById('CarModel').value;
    var CarPrice = document.getElementById('CarPrice').value;
  
    var CarDoor = document.getElementById('CarDoor').value;
    var CarPassenger = document.getElementById('CarPassenger').value;
    var  CarSuitcase  = document.getElementById('CarSuitcase').value;
    var  CarGear  = document.getElementById('CarGear').value;
  
    var CarFuelType = document.getElementById('CarFuelType').value;
    var CarCategoriType = document.getElementById('CarCategoriType').value;
  
    update(ref(database, 'Cars/' + CarID), {
      CarID: CarID,
      CarName: CarName,
      CarModel: CarModel,
      CarPrice: CarPrice,
  
      CarDoor:CarDoor,
      CarPassenger:CarPassenger,
      CarSuitcase:CarSuitcase,
      CarGear:CarGear,
  
      CarFuelType: CarFuelType,
      CarCategoriType: CarCategoriType
  
    })
    alert('Veriler güncellendi');
  });