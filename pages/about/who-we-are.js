import Layout from '../../shared/layouts/PageLayout'
import Markdown from 'react-markdown'

const churchHistory = () => (
  <div className="mainContainer">
    <Layout truthy='true'>
    <Markdown source={`

# Who We Are

__*Rooted in Hope, Branching Out*__

At the Orchard, we believe God has called us as a church to grow alongside one another into Fully Functioning Followers of Jesus; Rooted in Hope and Branching Out to the World.

As we think about the image of an Orchard, picture row upon row of strong and healthy trees. Trees which are not planted by accident. No, this is no random or wild forest. An Orchard is planted by a master, with intent.

Each tree is a carefully chosen part of the Orchard by design. Each grows stronger in the group, stands stronger in the group, and fulfills their purpose better in the group. We are each planted in this Orchard by the design of our Lord Jesus.

We, are no random or wild forest. Planted by Christ and rooted in Him, we grow in Him alongside one another, seeking to faithfully branch out with the Good News of the Gospel, to a hurting world which needs Jesus.

      `} />

    </Layout>
  </div>
)

export default churchHistory
