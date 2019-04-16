import FundsRaised from "../components/FundsRaised";
import DebtRemaining from "../components/DebtRemaining";
import FundsPledged from "../components/FundsPledged";

const Index = () => (
  <div className="SideBar">
    <h4 className="green">
      Campaign Goal: <span id="funds">$550,000 </span>
      <br />
      Funds Raised: <span id="funds"><FundsRaised /> </span>
      <br /> 
      Funds Pledged: <span id="funds"><FundsPledged /> </span>
    </h4>
  
    <h4 className="red">Mortgage Balance: <span id="funds"><DebtRemaining /> </span></h4>
    <style jsx>{`
        h4 {
          font-weight:700;
          line-height:1.5;
          margin-bottom:2em;
        }
        .green {
          color:#146414d1;
        }
        .red {
          color: #c52727e8;
        }
      `}</style>
  </div>
)

export default Index
