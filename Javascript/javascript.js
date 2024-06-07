document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-btn');
    const waNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Warung Mak Ni

    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const menu = this.getAttribute('data-menu');
            const price = this.getAttribute('data-price');
            const message = `Halo Warung Mak Ni, saya ingin memesan ${menu} (Rp. ${parseInt(price).toLocaleString('id-ID')}).`;
            const encodedMessage = encodeURIComponent(message);
            const waURL = `https://wa.me/${waNumber}?text=${encodedMessage}`;
            window.open(waURL, '_blank');
        });
    });
});
