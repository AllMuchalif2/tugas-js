let order = [];
let total = 0;

function addToOrder(item, price) {
    order.push({ item, price });
    updateOrder();
}

function removeFromOrder(index) {
    order.splice(index, 1);
    updateOrder();
}

function updateOrder() {
    const orderList = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    orderList.innerHTML = '';

    order.forEach((orderItem, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `${orderItem.item} - Rp. ${orderItem.price}`;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Hapus';
        removeBtn.className = 'btn btn-danger btn-sm';
        removeBtn.onclick = () => removeFromOrder(index);

        li.appendChild(removeBtn);
        orderList.appendChild(li);
    });

    total = order.reduce((sum, orderItem) => sum + orderItem.price, 0);
    totalPriceElement.textContent = total;
}

function placeOrder() {
    const name = document.getElementById('customer-name').value;
    const room = document.getElementById('customer-room').value;

    if (!name) {
        alert('Silakan masukkan nama Anda.');
        return;
    }

    if (order.length === 0) {
        alert('Pesanan Anda kosong!');
        return;
    }

    const transactionNumber = `TRX-${Math.floor(Math.random() * 1000)}`;
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();

    const orderDetails = `
        No. Transaksi   : ${transactionNumber}\n\n
        Nama    : ${name}
        ${room ?  `Tempat : ${room}` : ''}\n
        Tanggal : ${dateString}
        Waktu   : ${timeString}
        Total     : Rp. ${total}
    `;

    alert(`Pesanan Anda sedang disiapkan!\n\n${orderDetails}`);
    resetOrder();
}

function resetOrder() {
    order = [];
    total = 0;
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-room').value = '';
    updateOrder();
}
