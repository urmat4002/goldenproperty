import { Form } from '@/features/Form/Form'
import { ArrowDownToLine } from 'lucide-react'

export const Room = () => {
  return (
    <div>
      <div>Room</div>
      <Form
        btnTitle={'Catalog'}
        inputPlaceholder1="Email"
        inputPlaceholder2="Select Role"
        icon={<ArrowDownToLine />}
      />
    </div>
  )
}
