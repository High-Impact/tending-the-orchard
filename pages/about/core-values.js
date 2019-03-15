import Layout from '../../shared/layouts/PageLayout'
import Markdown from 'react-markdown'

const churchHistory = () => (
  <div className="mainContainer">
    <Layout truthy='true'>
    <Markdown escapeHtml={false}
    
    source={`

# Core Values

## Biblical Teaching
![](/static/images/core-values/biblical-teaching.jpg)

<br>
<hr> 
<br>
<br>

## Authentic Worship
![](/static/images/core-values/authentic-worship.jpg)

<br>
<hr> 
<br>
<br>

## Healthy Families
![](/static/images/core-values/healthy-families.jpg)

<br>
<hr> 
<br>
<br>

## Intentional Growth
![](/static/images/core-values/intentional-growth.jpg)

<br>
<hr> 
<br>
<br>

## Empowering Leadership
![](/static/images/core-values/empowering-leadership.jpg)

<br>
<hr> 
<br>
<br>

## Embracing the Lost
![](/static/images/core-values/embracing-the-lost.jpg) 

      `} />

    </Layout>
  </div>
)

export default churchHistory
