var data_mentah = {
    "Kopi": [
        {
            "nama": "Cappuccino",
            "foto": "images/produk/product_capuchino.jpg",
            "size": "150 ml",
            "harga": "65.000",
            "link": "#"
        },
        {
            "nama": "Espresso",
            "foto": "images/produk/product_espresso.jpg",
            "size": "150 ml",
            "harga": "45.000",
            "link": "#"
        }
    ],
    "Non Kopi": [
        {
            "foto": "https://fibercreme.com/wp-content/uploads/2021/04/Dawet-Durian-1.jpg",
            "nama": "Es Cendol",
            "size": "100 Gram",
            "harga": "500.000",
            "link": "https://www.google.com/search?q=kopi+susu+robusta&tbm=shop"
          },
        {
            "nama": "Teh Tarik",
            "foto": "images/produk/Teh_tarik.jpg",
            "size": "250 ml",
            "harga": "25.000",
            "link": "#"
        },
        {
            "foto": "images/produk/es_campur.jpg",
            "nama": "Es Campur",
            "size": "100 Gram",
            "harga": "50.000",
            "link": "https://www.google.com/search?q=kopi+susu+robusta&tbm=shop"
          }
    ],
    "Camilan": [
        {
            "nama": "Tempe Mendoan",
            "foto": "https://asset.kompas.com/crops/7s1zIClbCexXibeqFVyVVgoWZGw=/4x2:972x648/750x500/data/photo/2022/09/21/632aa5001639f.jpg",
            "size": "5 Pcs",
            "harga": "25.000",
            "link": "#"
        },
        {
            "nama": "Sate Taichan",
            "foto": "https://asset.kompas.com/crops/Mx7cE4bnIstwWi0ep_7GKE3_cLQ=/3x2:794x397/750x500/data/photo/2017/08/11/807410757.jpg",
            "size": "5 Pcs",
            "harga": "25.000",
            "link": "#"
        }
    ]
}
console.log("isi Data Mentah = ", data_mentah);

var data_mentah = {}

console.log("Isi Data mentah:", data_mentah)

function updateSelect() {
    select_produk.innerHTML = '<option selected disabled>-</option>'

    Object.keys(data_mentah).forEach(kategori => {
        select_produk.innerHTML += '<option value="'+kategori+'">'+kategori+'</option>'
    })
    console.log("Select berhasil Diganti")
}
updateSelect()

var data_kopi = []

select_produk.onchange = function () {
    var pilihan = select_produk.value
    console.log("Isi Pilihannya :", pilihan)

    data_kopi = data_mentah[pilihan]
    console.log("Isi Data yang dipilih :", data_kopi)
    updateTampilan()
}

baris_produk.innerHTML = ''
function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `
        <div class="col mb-4">
          <div class="card">
            <img src="${kopi.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${kopi.nama}</h5>
                    <div class="row hargasize my-4">
                        <div class="col">
                            <i class="bi bi-cup-hot"></i> ${kopi.size}
                        </div>

                        <div class="col fw-bold text-primary">
                            ${kopi.harga}
                        </div>
                    </div>
                    <a target="_blank" href="${kopi.link}" class="btn btn-primary w-100"><i class="bi bi-cart2"></i> Beli</a>
                </div>
            </div>
        </div>`
    })

}

var sumber = "https://rikikurnia.com/prakerja/api/kopi"
var sumber2 = "data.json"

$.getJSON(sumber2).then(data => {
    data_mentah = data
    updateSelect()
})
                            