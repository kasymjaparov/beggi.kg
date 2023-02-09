import { Stack, Pagination, FormControl, OutlinedInput } from "@mui/material"
import { useState, useEffect } from "react"

const CustomPagination = ({
  handleChangePage,
  defaultPage,
  currentPage,
  pagesCount,
}) => {
  const [search, setSearch] = useState(currentPage)
  const boundaryCount = 3
  const handleSubmit = e => {
    if (parseInt(search) > pagesCount || parseInt(search) < 1) {
      return
    }
    handleChangePage(e, parseInt(search))
  }
  useEffect(() => {
    setSearch(currentPage)
  }, [currentPage])
  if (pagesCount <= 1) return null
  return (
    <div className="custom-table-pagination">
      <Stack direction="row" spacing={2}>
        <Pagination
          count={pagesCount}
          page={currentPage}
          onChange={handleChangePage}
          boundaryCount={boundaryCount}
          defaultPage={defaultPage}
          variant="outlined"
          shape="rounded"
        />
        <div className="custom-table-pagination__search">
          <FormControl
            sx={{
              width: "60px",
            }}
            error={parseInt(search) > pagesCount || parseInt(search) < 1}
            variant="outlined"
          >
            <OutlinedInput
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyUp={event => {
                if (event.key === "Enter") handleSubmit(event)
              }}
              type="number"
              inputProps={{
                style: {
                  padding: "6px",
                  height: "100%",
                },
              }}
              endAdornment={
                <i
                  onClick={handleSubmit}
                  className="fa-solid fa-magnifying-glass touchable_icon"
                />
              }
            />
          </FormControl>
        </div>
      </Stack>
    </div>
  )
}
export default CustomPagination
