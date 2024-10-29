import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import DesignSystem from './Pages/DesignSystem/index.tsx'
import AlertPreview from './Components/Alert/AlertPreview.tsx'
import All from './Pages/DesignSystem/All.tsx'
import ButtonPreview from './Components/Button/ButtonPreview.tsx'
import CardPreview from './Components/Card/CardPreview.tsx'
import IconButtonPreview from './Components/IconButton/IconButtonPreview.tsx'
import ListPreview from './Components/List/ListPreview.tsx'
import ModalPreview from './Components/Modal/ModalPreview.tsx'
import SelectPreview from './Components/Select/SelectPreview.tsx'
import TextFieldPreview from './Components/TextField/TextFieldPreview.tsx'
import CheckBoxPreview from './Components/CheckBox/CheckboxPreview.tsx'
import AutocompletePreview from './Components/Autocomplete/AutocompletePreview.tsx'
import BadgePreview from './Components/Badge/BadgePreview.tsx'
import ChipPreview from './Components/Chip/ChipPreview.tsx'
import ProgressPreview from './Components/Progress/ProgressPreview.tsx'
import SkeletonPreview from './Components/Skeleton/SkeletonPreview.tsx'
import ToggleButtonPreview from './Components/ToggleButton/ToggleButtonPreview.tsx'
import AccordionPreview from './Components/Accordion/AccordionPreview.tsx'
import MenuPreview from './Components/Menu/MenuPreview.tsx'
import PopoverPreview from './Components/Popover/PopoverPreview.tsx'
import SwitchPreview from './Components/Switch/SwitchPreview.tsx'
import SliderPreview from './Components/Slider/SliderPreview.tsx'
import LandingPage from './Pages/LandingPage/index.tsx'
import AvatarPreview from './Components/Avatar/AvatarPreview.tsx'
import CodePreview from './Components/Code/CodePreview.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "design",
    element: <DesignSystem />,
    children: [
      {
        path: "",
        element: <All />,
      },
      {
        path: "/design/accordion",
        element: <AccordionPreview />,
      },
      {
        path: "/design/alert",
        element: <AlertPreview />,
      },
      {
        path: "/design/autocomplete",
        element: <AutocompletePreview />,
      },
      {
        path: "/design/avatar",
        element: <AvatarPreview />,
      },
      {
        path: "/design/badge",
        element: <BadgePreview />,
      },
      {
        path: "/design/button",
        element: <ButtonPreview />,
      },
      {
        path: "/design/card",
        element: <CardPreview />,
      },
      {
        path: "/design/checkbox",
        element: <CheckBoxPreview />,
      },
      {
        path: "/design/chip",
        element: <ChipPreview />,
      },
      {
        path: "/design/code",
        element: <CodePreview />,
      },
      {
        path: "/design/iconbutton",
        element: <IconButtonPreview />,
      },
      {
        path: "/design/list",
        element: <ListPreview />,
      },
      {
        path: "/design/menu",
        element: <MenuPreview />,
      },
      {
        path: "/design/modal",
        element: <ModalPreview />,
      },
      {
        path: "/design/popover",
        element: <PopoverPreview />,
      },
      {
        path: "/design/progress",
        element: <ProgressPreview />,
      },
      {
        path: "/design/select",
        element: <SelectPreview />,
      },
      {
        path: "/design/skeleton",
        element: <SkeletonPreview />,
      },
      {
        path: "/design/slider",
        element: <SliderPreview />,
      },
      {
        path: "/design/switch",
        element: <SwitchPreview />,
      },
      {
        path: "/design/textfield",
        element: <TextFieldPreview />,
      },
      {
        path: "/design/togglebutton",
        element: <ToggleButtonPreview />,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
