import Accordion from '.'
import AccordionItem from '../AccordionItem'

const AccordionPreview = () => {
  return (
    <div>
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <h2>FAQ</h2>
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
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <h2>Features</h2>
        <Accordion multiple>
          <AccordionItem id="feature1" header="Feature One">
            <p>Description of feature one.</p>
          </AccordionItem>
          <AccordionItem id="feature2" header="Feature Two">
            <p>Description of feature two.</p>
          </AccordionItem>
          <AccordionItem id="feature3" header="Feature Three">
            <p>Description of feature three.</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default AccordionPreview