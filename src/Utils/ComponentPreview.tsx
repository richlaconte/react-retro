import { FC } from 'react'
import Card from '../Components/Card'
import Code from '../Components/Code'

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
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {component}
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ flexGrow: 1 }}>
              <Card style={{ minWidth: '400px' }}>
                {controls}
              </Card>
            </div>
            <div>
              
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