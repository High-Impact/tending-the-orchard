import Layout from '../../shared/layouts/PageLayout'
import Markdown from 'react-markdown'

const churchHistory = () => (
  <div className="mainContainer">
    <Layout truthy='true'>
    <Markdown source={`

# Core Values

## Biblical Teaching
![](/static/who-we-are.jpg)

## Authentic Worship
![](/static/who-we-are.jpg)

## Authentic Worship
![](/static/who-we-are.jpg)

## Healthy Families
![](/static/who-we-are.jpg)

## Intentional Growth
![](/static/who-we-are.jpg)

## Empowering Leadership
![](/static/who-we-are.jpg)

## Embracing the Lost
![](/static/who-we-are.jpg) 

      `} />

    </Layout>
  </div>
)

export default churchHistory
