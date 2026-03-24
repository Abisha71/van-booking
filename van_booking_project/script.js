document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();

    let data = {
        pickup: document.getElementById('pickup').value,
        drop: document.getElementById('drop').value,
        passengers: document.getElementById('passengers').value
    };

    fetch('/book', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.message;
    });
});
