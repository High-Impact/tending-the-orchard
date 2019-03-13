import FundsRaised from "../components/FundsRaised";

const Index = () => (
  <div className="SideBar">
    <h4>Funds Raised: <span id="funds"><FundsRaised /> </span></h4>
    <style jsx>{`
        h4 {
          font-weight:700;
          margin-bottom:2em;
        }
      `}</style>
  </div>
)

export default Index
