const Jsx = () => {
    const kullanici = {
        ad: "Salih",
        soyad: "Bayram",
        email: "salih@bayram.com",
        telefon: "55555555"
    }

    return ( <div>
        <div>
            Merhaba {kullanici.ad} {kullanici.soyad}
        </div>
        <div>Eposta: {kullanici.email}</div>
    </div> )
};

export default Jsx;