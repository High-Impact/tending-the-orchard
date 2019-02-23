import Layout from '../../shared/layouts/PageLayout'
import Markdown from 'react-markdown'

const churchHistory = () => (
  <div className="mainContainer">
    <Layout truthy='true'>
    <Markdown source={`

# Church History

__*In the Spring of 1994, a small group of Christ followers began to meet together for Bible study and worship, sensing God’s call to plant a new church.*__

By September, they began renting a space at 4041 Albany in McHenry, IL and officially incorporated as StoneRidge Community Church on December 21, 1994. Over the next 10 years, the church rented various schools around McHenry to worship.

In 2003, the church began their partnership with the Baptist General Conference (now called Converge).  In 2004, a bold move was made and our current worship center at 768 Ridgeview Dr. was purchased. 2005-2007 would prove to be challenging years for the church.

Two lead pastors resigned under difficult circumstances and many families left the church. During this time, the name of the church was changed from StoneRidge to The Orchard, and officially the church underwent a “re-start.”

At this critical time, believing in the Lord’s purpose for The Orchard, Converge stepped in to provide key leadership and financial support. This included supplying interim preachers, helping search for a permanent pastor, and loan funding for our church facility. Converge helped bring Tim Beavis to The Orchard in August of 2007.

Growth began again, and to accommodate the needs of the body, the Family Ministry Center was purchased in October 2008, with additional funds from Converge. Scott Swanson joined the pastoral team in July of 2009 as Pastor of Family Ministries, and became Senior Pastor in April 2018

During this time, the name of the church was changed from StoneRidge to The Orchard, and officially the church underwent a “re-start.” At this critical time, believing in the Lord’s purpose for The Orchard, Converge stepped in to provide key leadership and financial support. This included supplying interim preachers, helping search for a permanent pastor, and loan funding for our church facility.

Converge helped bring Tim Beavis to The Orchard in August of 2007. Growth began again, and to accommodate the needs of the body, the Family Ministry Center was purchased in October 2008, with the pastoral team in July of 2009 as Pastor of Family Ministries, and became Senior Pastor in April 2018.
      `} />

    </Layout>
  </div>
)

export default churchHistory
