import Layout from '../shared/layouts/PageLayout'
import Markdown from 'react-markdown'

const FAQ = () => (
  <div className="mainContainer">
  <Layout>
  <Markdown source={`

# FAQs

__How can I give?__

Refer to website or decision guide.

__How quickly will the debt be paid off?__

March 2022 is the goal.

__Where can I go to see how much has been given and how often will this information be updated?__

We will have regular annoucements of status at church and a designated webpage linked through our website that has weekly updates.

__Where is the money going?__

Payments are made to Converge MidAmerica who extended the mortgage loan to us.

__Is re-financing an option?__

No. We would not be able to get better loan terms than what Converge is giving us.
  `} />
  </Layout>
  </div>
)

export default FAQ
