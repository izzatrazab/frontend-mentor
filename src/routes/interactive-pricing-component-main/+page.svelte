<div id="background" style="width: 100%; height:100%">
	<hgroup class="title">
		<h1 style="margin-bottom: 0;">Simple, traffic-based pricing</h1>
		<p>Sign-up for our 30-day trial. No credit card required.</p>
	</hgroup>
	<div class="card">
		<div>
			<div>
				<!-- all capital letter -->
				100K pageviews
			</div>
			<div>$16.00/month</div>
			<div>slider</div>
			<div>
				<!-- first letter capitalize -->
				monthly billing</div>
			<div>
				<!-- first letter capitalize -->
				yearly billing</div>
			<div>25% discount</div>
		</div>
		<footer>
			<div>
				<span>Unlimeted websites</span>
				<span>100% data ownership</span>
				<span>Email reports</span>
			</div>
			<button>Start my tffrial</button>
		</footer>
	</div>
</div>

<style>
	#background {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 2px;
		box-sizing: border-box;
		padding: 10px;
		background-image: url("./bg-pattern.svg");
		background-repeat: no-repeat;
	}
	.title {
		margin-block: 20px;
		text-align: center;
		background-image: url("./pattern-circles.svg") ;
		background-size:contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.card {
		min-width: 330px;
		max-width: 550px;
		box-sizing: border-box;
		border-radius: 10px;
		box-shadow: 0 5px 3px rgba(0, 0, 0, 0.075);
		background-color: white;
	}
	.card > * {
		padding: 6vmin;
	}

	footer{
		display: flex;
		flex-wrap: wrap;
		border-style: solid;
		border-width: 1px 0 0 0 ;
	}
</style>
