import { FC } from 'react'
import Card from '../Card'
import Code from '../Code'

import './ComponentPreview.css'

const ComponentPreview: FC<{
  importCode: string
  exampleCode: string
  component: JSX.Element
  controls: JSX.Element
}> = ({
  importCode,
  exampleCode,
  component,
  controls
}) => {
  return (
    <div>
      <Card>
        <h2 style={{ marginBottom: '12px' }}>
          Interactive Preview
        </h2>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            {component}
          </div>
          <div className="props-and-code-container">
            <div style={{ flexGrow: 1 }}>
              <Card style={{ minWidth: '400px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h2>Props</h2>
                  {controls}
                </div>
              </Card>
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '100%', display: 'flex' }}>
                <Code variant='block' withCopy style={{ flexGrow: 1 }}>
                  {importCode}
                </Code>
              </div>
              <div style={{ width: '100%', display: 'flex' }}>
                <Code variant='block' withCopy style={{ flexGrow: 1 }} maxHeight='300px'>
                  {exampleCode}
                </Code>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ComponentPreview