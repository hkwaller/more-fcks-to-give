import { Box, Heading, Text } from '@chakra-ui/react'

type Props = {
  scale?: number
  smallText: string
  bigText: string
}

function Header({ scale = 1, smallText, bigText }: Props) {
  return (
    <Box scale={scale} rotate={12}>
      <Text>{smallText}</Text>
      <Heading>{bigText}</Heading>
    </Box>
  )
}

export default Header
