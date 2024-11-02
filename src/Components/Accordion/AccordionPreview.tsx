import Accordion from '.'
import ComponentPreview from '../ComponentPreview/ComponentPreview'
import AccordionItem from '../AccordionItem'

const AccordionPreview = () => {
  const exampleCode = `<Accordion>
  <AccordionItem id="item1" header="What is your return policy?">
    <p>
      Our return policy lasts 30 days. If 30 days have gone by since your purchase,
      unfortunately, we can’t offer you a refund or exchange.
    </p>
  </AccordionItem>
  <AccordionItem id="item2" header="How do I track my order?">
    <p>
      You can track your order status in real time by entering your order information
      on the tracking page.
    </p>
  </AccordionItem>
  <AccordionItem id="item3" header="Can I purchase items again?">
    <p>
      Yes, you can purchase items again by logging into your account and going to
      your order history.
    </p>
  </AccordionItem>
</Accordion>`

  return (
    <div>
      <div>
        <h1>Accordion</h1>
      </div>
      <ComponentPreview
        importCode={`import { Accordion } from 'react-retro'`}
        exampleCode={exampleCode}
        component={
          <div style={{ maxWidth: '400px', marginTop: '12px', marginBottom: '26px' }}>
            <Accordion>
              <AccordionItem id="item1" header="What is your return policy?">
                <p>
                  Our return policy lasts 30 days. If 30 days have gone by since your purchase,
                  unfortunately, we can’t offer you a refund or exchange.
                </p>
              </AccordionItem>
              <AccordionItem id="item2" header="How do I track my order?">
                <p>
                  You can track your order status in real time by entering your order information
                  on the tracking page.
                </p>
              </AccordionItem>
              <AccordionItem id="item3" header="Can I purchase items again?">
                <p>
                  Yes, you can purchase items again by logging into your account and going to
                  your order history.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        }
        controls={<></>}
      />

    </div>
  )
}

export default AccordionPreview