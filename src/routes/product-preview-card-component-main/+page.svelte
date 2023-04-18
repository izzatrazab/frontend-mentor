<script>
    import productImage from "$lib/product-preview-card-component-main/perfume.jpg";
</script>

<svelte:head>
    <title>frontend mentor: product-preview-card-component-main</title>
    <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/fraunces" rel="stylesheet" />
</svelte:head>
<main>
    <section class="card">
        <img src={productImage} alt="" />
        <section class="right">
            <h1>PERFUME</h1>
            <h2>Gabrielle Essence Eau De Parfum</h2>
            <p class="description">
                A floral, solar and voluptuous interpretation composed by Oliver
                Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <p class="price">
                <span class="discount-price">$149.99</span>
                <span class="real-price">$169.99</span>
            </p>
            <button>Add to Cart</button>
        </section>
    </section>
</main>

<style>
    h1 {
        margin: 0;
        color: hsl(228, 12%, 48%);
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 5px;
    }
    h2 {
        margin:0;
        font-family: "Fraunces", sans-serif;
        font-weight: 700;
        font-size: xx-large;
    }
    p{
        margin: 0;
    }
    button {
        width: 100%;
        background: hsl(158, 36%, 37%);
        border-radius: 10px;
        color: white;
        padding: 12px;
    }
    main {
        width: 100%;
        height: 100vh;
        background-color: rgb(243, 235, 228);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Montserrat", sans-serif;
    }
    .card {
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        border-radius: 10px;
        margin: 15px;
        overflow: hidden;
        max-width: 580px;
    }
    img {
        flex: 1 1 50%;
        width: 100%;
        min-width: 290px;
        object-fit: cover;
        object-position: center;
    }
    @media (max-width: 609px) {
       img{
        max-height: 300px;
        object-position: 100% 35%;
       }
    }

    .right {
        box-sizing: border-box;
        padding: 1.5em;
        flex: 1 1 50%;
        min-width: 290px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .description {
        font-size: 14px;
        color: hsl(228, 12%, 48%);
    }
    .price {
        display: flex;
        align-items: center;
    }
    .discount-price {
        font-family: "Fraunces", sans-serif;
        font-size: xx-large;
        color: hsl(158, 36%, 37%);
        margin-right: 10px;
    }
    .real-price {
        font-size: 14px;
        text-decoration: line-through;
        color: hsl(228, 12%, 48%);
    }
</style>
