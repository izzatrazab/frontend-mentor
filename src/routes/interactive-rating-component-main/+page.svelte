<script lang="ts">
    import { onMount } from "svelte";
    import star from "$lib/interactive-rating-component-main/icon-star.svg";
    import thankyou from "$lib/interactive-rating-component-main/illustration-thank-you.svg";
    let sent: boolean = false;
    let rating: number = 0;
    let ratings: NodeListOf<HTMLInputElement>;

    onMount(async () => {
        ratings = document.getElementsByName(
            "rating"
        ) as NodeListOf<HTMLInputElement>;
    });

    function clickRadio(index: number) {
        rating = index + 1;
        console.log(rating);
    }

    async function submitRating() {
        const response = await fetch(
            "interactive-rating-component-main/rating",
            {
                method: "post",
                body: JSON.stringify({
                    rating,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((response) => response.json());
        if (response.received) openResult();
        else console.log("not received rating");
    }

    function openResult() {
        sent = true;
    }
</script>

<div class="background">
    <div class="card" class:card-center={sent}>
        {#if !sent}
            <img src={star} id="star" alt="star icon" />
            <hgroup>
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </hgroup>
            <div id="rating">
                {#each Array(5) as _, i}
                    <button
                        class="radio"
                        class:clicked={rating === i + 1}
                        on:click={() => clickRadio(i)}
                    >
                        {i + 1}
                    </button>
                {/each}
            </div>
            <button
                disabled={rating === 0}
                id="submit"
                on:click={(e) => {
                    e.preventDefault();
                    submitRating();
                }}
            >
                SUBMIT
            </button>
        {:else}
            <img src={thankyou} alt="illustration-thank-you" id="rated-image" />
            <span>
                You selected {rating} out of 5
            </span>
            <hgroup>
                <h1>Thank you!</h1>
                <p>
                    We appreaciate you taking the time to give a rating. If you
                    ever need mor esupport, don't hesitate to get in touch!
                </p>
            </hgroup>
        {/if}
    </div>
</div>

<style>
    .background {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        background-color: rgb(20, 21, 25);
        padding: 20px;
    }
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 360px;
        width: 100%;
        aspect-ratio: 1;
        border-radius: 6%;
        padding: 35px;
        font-family: sans-serif;
        color: white;
        background-color: rgb(31, 38, 48);
    }
    .card-center {
        align-items: center;
        text-align: center;
    }
    p {
        color: rgb(117, 124, 134);
        line-height: 1.6rem;
    }
    #star {
        background-color: rgba(128, 128, 128, 0.3);
        aspect-ratio: 1;
        border-radius: 50%;
        width: 16px;
        padding: 15px;
    }
    #rating {
        display: flex;
        padding-block: 10px;
        justify-content: space-between;
        margin-bottom: 16px;
    }
    .radio {
        border-radius: 50%;
        border: none;
        width: 3rem;
        aspect-ratio: 1;
        background-color: rgb(38, 47, 56);
        color: aliceblue;
    }
    .radio:hover {
        background-color: rgb(251, 119, 21);
        cursor: pointer;
    }
    #submit {
        width: 100%;
        padding: 13px;
        border-radius: 50px;
        background-color: rgb(251, 119, 21);
        color: aliceblue;
        font-weight: bold;
        letter-spacing: 2px;
        border: none;
    }
    #submit:hover {
        background-color: aliceblue;
        color: rgb(251, 119, 21);
    }
    #rated-image {
        margin-bottom: 30px;
        width: 50%;
    }
    span {
        background-color: rgb(44,50,58);
        color: rgb(251, 119, 21);
        padding: 8px 20px 8px 20px;
        border-radius: 50px;
    }

    .clicked {
        background-color: rgb(124, 136, 152) !important;
    }
</style>
