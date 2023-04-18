<script>
    import productImage from "$lib/product-preview-card-component-main/perfume.jpg"
</script>
<svelte:head>
    <title>frontend mentor: product-preview-card-component-main</title>
    <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/fraunces" rel="stylesheet">
</svelte:head>
<main>
    <section class="card">
        <img src={productImage} alt="">
        <section>
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
        color:  hsl(228, 12%, 48%);
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 5px;
    }
    h2{
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: 'Fraunces', sans-serif;
        font-weight: 700;
        font-size:xx-large;
    }
    button{
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
        font-family: 'Montserrat', sans-serif;
                                                
        /* border-style: solid; */
    }
    .card {
        background-color: white;
        display: flex;
        border-radius: 10px;
        margin: 10px;
        overflow: hidden;
        flex-wrap: wrap;
        min-width: 360px;

    }
    .card > section {
        flex: 1;
        box-sizing: border-box;
        padding: 1.5em;
        min-height: 320px;
        /* min-width: 273px; */
        /* max-width: 250px; */
    }
    .card > img {
        /* flex: 1; */
        height: 100%;
        /* object-fit: cover; */
        /* min-width: 273px; */
        /* max-width: 250px; */
    }
    .description{
        font-size: 14px;
        color:  hsl(228, 12%, 48%);
    }
    .price{
        display: flex;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .discount-price{
        font-family: 'Fraunces', sans-serif;
        font-size: xx-large;
        color: hsl(158, 36%, 37%);
        margin-right: 10px;
    }
    .real-price{
        font-size: 14px;
        text-decoration: line-through;
        color:  hsl(228, 12%, 48%);
    }
</style>
