import Layout from '../shared/PageLayout'
import Markdown from 'react-markdown'

const Index = () => (
  <div className="mainContainer">
    <Layout>
      <Markdown source={`

# Tending The Orchard

## Rooted in hope and branching out to the world

At the Orchard, we believe God has called us as a church to grow alongside one another into
Fully Functioning Followers of Jesus; Rooted in Hope and Branching Out to the World. It is a
beautiful picture; rooted in Christ, growing in Christ, sharing Christ.

As individual believers, this should describe our spiritual lives, but I love how God brings
us together to further this growth in His wonderful plan of the church. As I think about the
 image of an Orchard, I picture row upon row of strong and healthy trees.

Trees which are not planted by accident. No, this is no random or wild forest. An Orchard is
planted by a master, with intent. Each tree is a carefully chosen part of the Orchard by design.
Each grows stronger in the group, stands stronger in the group, and fulfills their purpose better
in the group…namely to bear fruit, more fruit and much fruit.

We are each planted in this Orchard by the design of our Lord Jesus. We, too, are no
random or wild forest. Planted by Christ and rooted in Him, we grow in Him alongside one
another, seeking to faithfully branch out with the Good News of the Gospel to a hurting world
which needs Jesus.
     `}/>
    </Layout>
  </div>
)

export default Index
