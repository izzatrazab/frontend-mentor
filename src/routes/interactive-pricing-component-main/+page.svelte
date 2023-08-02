<div id="background" style="width: 100%; height:100%">
	<hgroup class="title">
		<h1 style="margin-bottom: 0;">Simple, traffic-based pricing</h1>
		<p>Sign-up for our 30-day trial. No credit card required.</p>
	</hgroup>
	<div class="card">
		<div id="card-body">
			<span>100K pageviews</span>
			<span>
				<strong style="color:rgb(41,50,83)">
					$16.00
				</strong>
				/month</span>
			<div>slider</div>
			<div>
				<span>
					<!-- first letter capitalize -->
					monthly billing
				</span>
				<span>
					<!-- first letter capitalize -->
					yearly billing
				</span>
				<span>25% discount</span>
			</div>
		</div>
		<footer>
			<div>
				<p>Unlimeted websites</p>
				<p>100% data ownership</p>
				<p>Email reports</p>
			</div>
			<button>Start my trial</button>
		</footer>
	</div>
</div>

<style>
	@media (min-width: 576px) {
		#card-body > span {
			max-width: 50%;
		}
		footer > div {
			max-width: 50%;
		}
	}

	@media (min-width: 768px) {
	}

	@media (min-width: 992px) {
	}

	@media (min-width: 1200px) {
	}

	#background {
		font-family:system-ui;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 2px;
		box-sizing: border-box;
		padding: 10px;
		background-image: url("./bg-pattern.svg");
		background-repeat: no-repeat;
		color: rgb(140,146,167);
	}
	.title {
		margin-block: 20px;
		text-align: center;
		background-image: url("./pattern-circles.svg");
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}

	.title > h1 {
		color: rgb(41,50,83);
	}
	.card {
		min-width: 330px;
		max-width: 550px;
		box-sizing: border-box;
		border-radius: 10px;
		box-shadow: 0 5px 3px rgba(117, 102, 102, 0.075);
		background-color: white;
	}
	.card > * {
		padding: 6vmin;
	}

	#card-body {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
	}

	#card-body > * {
		width: 100%;
	}

	footer {
		display: flex;
		flex-wrap: wrap;
		border-style: solid;
		border-width: 1px 0 0 0;
	}
	footer > div {
		width: 100%;
	}
	button {
		margin: auto;
		border: none;
		border-radius: 50px;
		padding: 10px 30px 10px 30px;
		font-weight: bold;
		color: rgb(191,206,249);
		background-color: rgb(41,50,83);
	}
</style>
