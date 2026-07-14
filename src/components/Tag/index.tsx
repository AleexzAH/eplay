import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: JSX.Element
}

const Tag = ({ size = 'small', children }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
