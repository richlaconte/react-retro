import Tooltip from '.';
import Card from '../Card';

const TooltipPreview = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Tooltip Component Example</h2>

      <div style={{ marginBottom: '20px' }}>
        <Tooltip content="This is a tooltip" position="top">
          <button style={{ padding: '10px', backgroundColor: '#A2D8FF', border: '2px solid #333333' }}>
            Hover me (Top)
          </button>
        </Tooltip>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Tooltip content={<span style={{ fontWeight: 'bold' }}>Bold Tooltip Content</span>} position="right">
          <button style={{ padding: '10px', backgroundColor: '#98D19F', border: '2px solid #333333' }}>
            Hover me (Right)
          </button>
        </Tooltip>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Tooltip content="This tooltip follows the mouse!" position="bottom" followMouse>
          <button style={{ padding: '10px', backgroundColor: '#FFD966', border: '2px solid #333333' }}>
            Hover me (Follow Mouse)
          </button>
        </Tooltip>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Tooltip content={<>test</>} position="bottom" followMouse>
          <button style={{ padding: '10px', backgroundColor: '#FFD966', border: '2px solid #333333' }}>
            Hover me (Follow Mouse)
          </button>
        </Tooltip>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Tooltip content={
          <Card>
            Test
          </Card>
          } 
          position="bottom"
          followMouse
        >
          <button style={{ padding: '10px', backgroundColor: '#FFD966', border: '2px solid #333333' }}>
            Hover me (Follow Mouse)
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default TooltipPreview