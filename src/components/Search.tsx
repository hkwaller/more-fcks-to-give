import { useEffect, useState } from 'react'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

type Props = {}

function Search(props: Props) {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function t() {
      const res = await fetch(`/api/search?term=${searchTerm}`)
      const data = await res.json()
      console.log('🚀 ~ file: Search.tsx:14 ~ t ~ data', data)
    }
    if (searchTerm.length > 2) {
      t()
    }
  }, [searchTerm])

  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </InputGroup>
    </Box>
  )
}
export default Search
