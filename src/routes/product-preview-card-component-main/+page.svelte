<script>
    import productImage from "$lib/product-preview-card-component-main/perfume.jpg";
    import iconCart from "$lib/product-preview-card-component-main/icon-cart.svg";
</script>

<svelte:head>
    <title>frontend mentor: product-preview-card-component-main</title>
    <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
    <link href="https://fonts.cdnfonts.com/css/fraunces" rel="stylesheet" />
</svelte:head>
<main>
    <section class="card">
        <h1 class="hide">PRODUCT</h1>
        <img src={productImage} class="product-image" alt="" />
        <section class="right">
            <h2>PERFUME</h2>
            <p class="name">Gabrielle Essence Eau De Parfum</p>
            <p class="description">
                A floral, solar and voluptuous interpretation composed by Oliver
                Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <p class="price">
                <span class="discount-price">$149.99</span>
                <span class="real-price">$169.99</span>
            </p>
            <button><img src={iconCart} alt="" />
                Add to Cart
            </button>
        </section>
    </section>
</main>

<style>
    .hide{
        visibility: hidden;
    }
    h2 {
        color: hsl(228, 12%, 48%);
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 5px;
    }
    .name {
        font-family: "Fraunces", sans-serif;
        font-weight: 700;
        font-size: xx-large;
    }
    button {
        width: 100%;
        padding: 12px;
        background: hsl(158, 36%, 37%);
        border: 0;
        border-radius: 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button > img {
        height: 100%;
        margin-right: 15px;
    }
    @media (hover: hover) {
        button:hover {
            background: rgb(26, 64, 49);
            cursor: pointer;
        }
    }
    main {
        font-family: "Montserrat", sans-serif;
        width: 100%;
        height: 100vh;
        background: rgb(243, 235, 228);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card {
        background: white;
        display: flex;
        flex-wrap: wrap;
        border-radius: 10px;
        margin: 15px;
        overflow: hidden;
        max-width: 580px;
    }
    .card > * {
        min-width: 290px;
        flex: 1 1 50%;
    }
    .product-image {
        object-fit: cover;
        object-position: center;
    }
    .right {
        box-sizing: border-box;
        padding: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 20px;
    }
     .right > *{
        margin: 0;
     }
    @media (max-width: 609px) {
        .product-image {
            max-height: 300px;
            object-position: 100% 35%;
        }
        .right{
            min-width: 334px;
        }
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
