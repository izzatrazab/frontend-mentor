<script>
  import reaction from "../../assets/result-summary-component/icon-reaction.svg";
  import memory from "../../assets/result-summary-component/icon-memory.svg";
  import verbal from "../../assets/result-summary-component/icon-verbal.svg";
  import visual from "../../assets/result-summary-component/icon-visual.svg";
</script>

<div id="parent">
  <div id="left">
    <h3 id="title" style="color:#ccc5ff;">Your Result</h3>
    <div class="circle">
      <h1 style="margin: 0; font-size:50px">76</h1>
      <p style="margin: 0; color:#8a7cff;">of 100</p>
    </div>
    <h2 style="margin-bottom: 0; padding-bottom:5px">Great</h2>
    <p style="color:#ccc5ff; margin-top:0;">
      You scored higher than 65% of the people who have taken these tests.
    </p>
  </div>
  <div id="right">
    <h3 id="title">Summary</h3>
    <div id="items">
      <div id="reaction">
        <div>
          <img src={reaction} alt="reaction" />
          <span>Reaction</span>
        </div>
        <div>
          <span>80</span>
          <span>&nbsp/&nbsp;100</span>
        </div>
      </div>
      <div id="memory">
        <div>
          <img src={memory} alt="memory" />
          <span>Memory</span>
        </div>
        <div>
          <span>92</span>
          <span>&nbsp/&nbsp;100</span>
        </div>
      </div>
      <div id="verbal">
        <div>
          <img src={verbal} alt="verbal" />
          <span>Verbal</span>
        </div>
        <div>
          <span>61</span>
          <span>&nbsp;/&nbsp;100</span>
        </div>
      </div>
      <div id="visual">
        <div>
          <img src={visual} alt="visual" />
          <span>Visual</span>
        </div>
        <div>
          <span>72</span>
          <span>&nbsp/&nbsp;100</span>
        </div>
      </div>
    </div>
    <button>Continue</button>
  </div>
</div>

<style>
  @font-face {
    font-family: hankengrotesk;
    src: url(../../assets/result-summary-component/HankenGrotesk-Medium.ttf);
  }
  #parent {
    font-family: hankengrotesk;
    font-size: small;
    background: white;
    border-radius: 20px;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    aspect-ratio: 3/2;
    box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.07);
  }
  @media (max-width: 519px) {
    #parent {
      grid-template-columns: 1fr;
    }
  }

  #parent > div {
    border-radius: inherit;
    padding: 20px;
    max-width: 250px;
  }
  #title {
    margin: 0;
    margin-bottom: 15px;
  }
  #left {
    background: rgb(50, 43, 234);
    background: -moz-linear-gradient(
      0deg,
      rgba(50, 43, 234, 1) 0%,
      rgba(101, 68, 245, 1) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(50, 43, 234, 1) 0%,
      rgba(101, 68, 245, 1) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(50, 43, 234, 1) 0%,
      rgba(101, 68, 245, 1) 100%
    );
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  #right {
    display: grid;
    background: transparent;
  }
  #right > #items {
    display: grid;
    gap: 10px;
    margin-bottom: 10px;
  }

  #items > div {
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #items > div > div {
    display: flex;
    align-items: center;
  }

  #items > div > div > img {
    padding-right: 10px;
  }

  #items > div > div:nth-child(2) > span:nth-child(1) {
    color: black;
  }
  #items > div > div:nth-child(2) > span:nth-child(2) {
    color: #9d9ba1;
  }
  #reaction {
    background: #fff6f5;
    color: #f55;
  }
  #memory {
    background: #fffbf2;
    color: #ffb21e;
  }
  #verbal {
    background: #f2fbfa;
    color: #00bb8f;
  }
  #visual {
    background: #f3f3fd;
    color: #1125d6;
  }
  button {
    width: 100%;
    border-width: 0px;
    border-radius: 20px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: black;
    color: white;
  }
  button:hover {
    background: rgb(50, 43, 234);
    background: -moz-linear-gradient(
      0deg,
      rgba(50, 43, 234, 1) 0%,
      rgba(101, 68, 245, 1) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(50, 43, 234, 1) 0%,
      rgba(101, 68, 245, 1) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(50, 43, 234, 1) 0%,
      rgba(101, 68, 245, 1) 100%
    );
  }
  .circle {
    border-radius: 100%;
    width: 120px;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(77, 34, 201, 1) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(77, 34, 201, 1) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(77, 34, 201, 1) 100%
    );
  }
</style>
