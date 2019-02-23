import Layout from '../../shared/layouts/PageLayout'
import Markdown from 'react-markdown'

const churchHistory = () => (
  <div className="mainContainer">
    <Layout truthy='true'>
    <Markdown source={`

# Core Values

__*I need content for this page.*__


- Biblical Teaching
- Authentic Worship
- Healthy Families
- Intentional Growth
- Empowering Leadership
- Embracing the Lost
      `} />

    </Layout>
  </div>
)

export default churchHistory
