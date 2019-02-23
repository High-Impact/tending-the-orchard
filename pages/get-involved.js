import Layout from '../shared/layouts/PageLayout'
import Markdown from 'react-markdown'

const getInvolved = () => (
  <div className="mainContainer">
    <Layout>
    <Markdown source={`

# How Do I Get Involved?

__*We realize this is no small task. We also realize that if we are faithfully following where the Lord is leading, we are sure to be successful. *__

This will require everyone being involved. Involved in prayer. Involved in helping serve. Involved in sacrificial giving. Some will be able to give more, others less. But all can sacrifice equally.

__Pray__

“Lord, what do YOU want me to do?” Ask God to stretch your faith. Invite him to do the supernatural through you.


__Calculate__

Calculate what you’re currently giving and think about what you could give over the next three years.

__Act__

God is our source, and when we give cheerfully, we express our trust in His promise to abundantly provide for us. Financial giving isn’t about money; rather it’s an expression of our trust in all that Jesus did for us.
    `} />
    </Layout>
  </div>
)

export default getInvolved
