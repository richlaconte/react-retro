import { FC } from 'react'
import { Autocomplete } from '../../Components'
import { useNavigate } from 'react-router-dom'

const options = [
  { label: 'Accordion', value: 'accordion' },
  { label: 'Alert', value: 'alert' },
  { label: 'Autocomplete', value: 'autocomplete' },
  { label: 'Avatar', value: 'avatar' },
  { label: 'Avatar Group', value: 'avatargroup' },
  { label: 'Badge', value: 'badge' },
  { label: 'Button', value: 'button' },
  { label: 'Card', value: 'card' },
  { label: 'Carousel', value: 'carousel' },
  { label: 'Checkbox', value: 'checkbox' },
  { label: 'Chip', value: 'chip' },
  { label: 'Code', value: 'code' },
  { label: 'Icon Button', value: 'iconbutton' },
  { label: 'List', value: 'list' },
  { label: 'Menu', value: 'menu' },
  { label: 'Modal', value: 'modal' },
  { label: 'Nav Bar', value: 'navbar' },
  { label: 'Popover', value: 'popover' },
  { label: 'Progress', value: 'progress' },
  { label: 'Radio Group', value: 'radiogroup' },
  { label: 'Rating', value: 'rating' },
  { label: 'Select', value: 'select' },
  { label: 'Sidebar', value: 'sidebar' },
  { label: 'Skeleton', value: 'skeleton' },
  { label: 'Slider', value: 'slider' },
  { label: 'Stepper', value: 'stepper' },
  { label: 'Switch', value: 'switch' },
  { label: 'Tabs', value: 'tabs' },
  { label: 'Text Field', value: 'textfield' },
  { label: 'Toggle Button', value: 'togglebutton' },
  { label: 'Tooltip', value: 'tooltip' },
]

const ComponentSearch: FC<{ disableLabel?: boolean }> = ({ disableLabel }) => {
  const navigate = useNavigate()

  return (
    <Autocomplete 
      label={!disableLabel ? "Search for a component" : undefined}
      placeholder='Search for a component'
      options={options}
      onChange={(e) => navigate(`/design/${e?.value}`)}
    />
  )
}

export default ComponentSearch