<svelte:head>
    <title>frontend mentor: product-preview-card-component-main</title>
</svelte:head>
<main>
    <section class="left">
        <!-- img here -->
    </section>
    <section class="right">
        <h1>PERFUME</h1>
        <h2>Gabrielle Essence Eau De Parfum</h2>
        <p>
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL
        </p>
        <p>
            <span>$149.99</span>
            <span>$169.99</span>
        </p>
        <button>Add to Cart</button>
    </section>
</main>

<style>
    h1{
        margin: 0;
    }
    main {
        display: flex;
    }
    main > section {
        width: 240px;
        padding: 30px;
        flex: 0.5;
        border-radius: inherit;
    }
    .left {
        background-image: url("$lib/product-preview-card-component-main/perfume.jpg");
        background-position: center;
        background-size: cover;
        border-radius: 10px 0px 0px 10px;
    }
    .right {
        background-color: white;
        min-height: 320px;
        border-radius: 0px 10px 10px 0px;
    }
</style>
